"use client";

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  sender: 'user' | 'agent';
  text: string;
}

interface ChatboxProps {
  currentStyle?: string;
}

export default function Chatbox({ currentStyle = 'corporate' }: ChatboxProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [sessionId, setSessionId] = useState<string>("");
  useEffect(() => {
    const randomId = "session-" + Math.random().toString(36).substring(2, 15);
    setSessionId(randomId);
  }, []);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (): Promise<void> => {
    const userQuery = input.trim();
    if (!userQuery || loading) return;
    
    setInput("");
    setMessages((prev) => [...prev, { sender: 'user', text: userQuery }, { sender: 'agent', text: "Thinking..." }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userQuery, 
          sessionId: sessionId
        })
      });

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userQuery },
      { sender: 'agent', text: "Thinking..." }
    ]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userQuery })
      });

      if (!response.ok) throw new Error(`Status error ${response.status}`);
      if (!response.body) throw new Error("Empty response streaming body.");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      // Clear out the placeholder text to prepare for incoming real-time chunks
      setMessages((prev) => {
        const updated = [...prev];
        if (updated.length > 0) {
          updated[updated.length - 1].text = "";
        }
        return updated;
      });

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        const textChunk = decoder.decode(value, { stream: true });
        
        setMessages((prev) => {
          const updated = [...prev];
          if (updated.length > 0) {
            updated[updated.length - 1].text += textChunk;
          }
          return updated;
        });
      }
    } catch (error: any) {
      console.error("Pipeline Failure:", error);
      setMessages((prev) => {
        const updated = [...prev];
        if (updated.length > 0) {
          updated[updated.length - 1].text = "Error: Failed to stream responses from backend services.";
        }
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  // DYNAMIC COMPONENT THEMING MAPS
  let windowStyles = "bg-white p-4 rounded-xl shadow-2xl border border-slate-200";
  let buttonStyles = "bg-slate-900 text-white rounded-full p-4 shadow-lg hover:bg-slate-800";
  let sendBtnStyles = "bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800";
  let userBubble = "bg-slate-900 text-white rounded-lg rounded-br-none";
  let agentBubble = "bg-white text-slate-800 border rounded-lg rounded-bl-none shadow-sm";

  if (currentStyle === 'minimalist') {
    windowStyles = "bg-white p-4 border border-slate-200 rounded-none shadow-none";
    buttonStyles = "bg-slate-900 text-white rounded-none p-4 hover:opacity-90";
    sendBtnStyles = "bg-slate-900 text-white px-4 py-2 rounded-none";
    userBubble = "bg-slate-100 text-slate-900 rounded-none border-b border-slate-200";
    agentBubble = "bg-white text-slate-800 rounded-none border-b border-slate-100";
  } else if (currentStyle === 'brutalist') {
    windowStyles = "bg-white p-4 rounded-none border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]";
    buttonStyles = "bg-orange-400 text-black rounded-none border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all";
    sendBtnStyles = "bg-black text-white px-4 py-2 rounded-none font-bold border-2 border-black";
    userBubble = "bg-orange-300 text-black rounded-none border-2 border-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]";
    agentBubble = "bg-white text-black rounded-none border-2 border-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]";
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {isOpen && (
        <div className={`${windowStyles} w-80 sm:w-96 mb-4 flex flex-col space-y-3 transition-all duration-200`}>
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="font-bold text-sm tracking-tight">Lisye's Research AI Agent</h3>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 text-xs font-bold px-1">✕</button>
          </div>
          
          <div className="h-60 overflow-y-auto p-2 bg-slate-50 border rounded text-xs flex flex-col space-y-3 overflow-x-hidden">
            {messages.length === 0 ? (
              <div className="text-slate-400 text-center mt-24">Ask a question about my research!</div>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`${msg.sender === 'user' ? userBubble : agentBubble} max-w-[85%] p-2 leading-relaxed`}>
                    <span className="block text-[9px] uppercase tracking-wider opacity-60 mb-0.5 font-sans font-semibold">
                      {msg.sender === 'user' ? 'You' : 'Nova Agent'}
                    </span>
                    <p className="font-mono text-[11px] whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))
            )}
            {/* Invisible anchor for automatic scrolling */}
            <div ref={chatEndRef} />
          </div>
          
          {/* Input Panel */}
          <div className="flex space-x-2">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder={loading ? "Nova is writing..." : "Ask something..."}
              className="flex-grow p-2 text-xs border rounded focus:outline-none focus:ring-1 focus:ring-slate-400"
              disabled={loading}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button 
              onClick={handleSendMessage} 
              disabled={loading || !input.trim()} 
              className={`${sendBtnStyles} text-xs disabled:opacity-50`}
            >
              Send
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button onClick={() => setIsOpen(!isOpen)} className={`${buttonStyles} flex items-center justify-center transition-transform active:scale-95`}>
          {isOpen ? <span className="text-sm font-bold px-1">Close Chat</span> : <span className="text-lg">💬</span>}
        </button>
      </div>
    </div>
  );
}
