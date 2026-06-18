import React, { useState } from 'react';

export default function Chatbox(): React.JSX.Element {
  const [input, setInput] = useState<string>("");
  const [reply, setReply] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendMessage = async (): Promise<void> => {
    if (!input) return;
    setLoading(true);
    setReply(""); 

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      if (!response.body) return;

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        const textChunk = decoder.decode(value, { stream: true });
        setReply((prev) => prev + textChunk); 
      }
    } catch (error) {
      console.error("Chat error:", error);
      setReply("Sorry, a connection error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
      <h3>Ask Lisye's Thesis AI Agent</h3>
      <div style={{ 
        border: '1px solid #ccc', 
        minHeight: '150px', 
        padding: '10px', 
        marginBottom: '10px', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '5px', 
        whiteSpace: 'pre-wrap' 
      }}>
        {reply || (loading ? "Thinking..." : "No conversation yet...")}
      </div>
      <div style={{ display: 'flex' }}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type a question for Amazon Nova..." 
          style={{ flexGrow: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          disabled={loading}
        />
        <button 
          onClick={handleSendMessage} 
          disabled={loading} 
          style={{ padding: '8px 15px', marginLeft: '10px', borderRadius: '4px', cursor: 'pointer' }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
