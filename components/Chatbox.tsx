"use client";

import React, { useState } from 'react';

interface ChatboxProps {
  currentStyle?: string;
}

export default function Chatbox({ currentStyle = 'corporate' }: ChatboxProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [reply, setReply] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendMessage = async (): Promise<void> => {
    if (!input.trim()) return;
    
    setLoading(true);
    setReply("Connecting to Bedrock Agent...");

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      if (!response.body) {
        throw new Error("ReadableStream not supported or empty response body.");
      }

      setReply(""); // Clear connection status text to stream real data
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        const textChunk = decoder.decode(value, { stream: true });
        setReply((prev) => prev + textChunk); 
      }
    } catch (error: any) {
      console.error("Critical Chat Error:", error);
      setReply(`Error: ${error.message || "Failed to communicate with the backend API."}`);
    } finally {
      setLoading(false);
    }
  };

  // DYNAMIC STYLE MAPPING FOR WIDGET POPUP & BUTTONS
  let windowStyles = "bg-white p-4 rounded-xl shadow-2xl border border-slate-200";
  let buttonStyles = "bg-slate-900 text-white rounded-full p-4 shadow-lg hover:bg-slate-800";
  let sendBtnStyles = "bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800";

  if (currentStyle === 'minimalist') {
    windowStyles = "bg-white p-4 border border-slate-200 rounded-none shadow-none";
    buttonStyles = "bg-slate-900 text-white rounded-none p-4 hover:opacity-90";
    sendBtnStyles = "bg-slate-900 text-white px-4 py-2 rounded-none";
  } else if (currentStyle === 'brutalist') {
    windowStyles = "bg-white p-4 rounded-none border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]";
    buttonStyles = "bg-orange-400 text-black rounded-none border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all";
    sendBtnStyles = "bg-black text-white px-4 py-2 rounded-none font-bold border-2 border-black";
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* THE FLOATING POPUP WINDOW */}
      {isOpen && (
        <div className={`${windowStyles} w-80 sm:w-96 mb-4 flex flex-col space-y-3 transition-all duration-200`}>
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="font-bold text-sm tracking-tight">Ask Lisye's Thesis AI Agent</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 text-xs font-bold px-1"
            >
              ✕
            </button>
          </div>
          
          {/* Chat Bubble Frame */}
          <div className="h-60 overflow-y-auto p-2 bg-slate-50 border rounded text-xs leading-relaxed font-mono white-space-pre-wrap">
            {reply || "No conversation yet..."}
          </div>
          
          {/* Action Row */}
          <div className="flex space-x-2">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder={loading ? "Waiting for Nova..." : "Ask me anything..."}
              className="flex-grow p-2 text-xs border rounded focus:outline-none focus:ring-1 focus:ring-slate-400"
              disabled={loading}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button 
              onClick={handleSendMessage} 
              disabled={loading || !input.trim()} 
              className={`${sendBtnStyles} text-xs disabled:opacity-50`}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}

      {/* THE FLOATING CORNER TRIGGER BUTTON */}
      <div className="flex justify-end">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`${buttonStyles} flex items-center justify-center transition-transform active:scale-95`}
          aria-label="Toggle chat"
        >
          {isOpen ? (
            <span className="text-sm font-bold px-1">Close Agent</span>
          ) : (
            <span className="text-lg">💬</span>
          )}
        </button>
      </div>
    </div>
  );
}
