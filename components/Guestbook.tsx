import { addComment } from '../app/actions';

interface GuestbookProps {
  commentList: any[];
  errorMsg?: string;
  dbConnected: boolean;
}

export default function Guestbook({ commentList, errorMsg, dbConnected }: GuestbookProps) {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Guestbook / Leave a Message</h2>
      <p className="text-slate-500 mb-6 text-sm">Testing area for interviewers to submit feedback or messages.</p>

      {!dbConnected && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm mb-4">
          ⚠️ <strong>Database Connection Missing:</strong> Please connect your database in environment variables.
        </div>
      )}

      {errorMsg && (
        <div className="bg-orange-50 border border-orange-200 text-orange-700 px-4 py-3 rounded-md text-sm mb-4">
          ❌ <strong>Submission Failed:</strong> {errorMsg}
        </div>
      )}

      {/* Form terhubung langsung ke Server Action */}
      <form action={addComment} className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Interviewer Name / Company"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
          <textarea 
            name="message" 
            rows={3} 
            required 
            className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your feedback here..."
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition duration-200"
        >
          Submit Message
        </button>
      </form>

      <div className="space-y-4">
        <h3 className="font-semibold text-slate-700 border-b pb-2">Recent Messages ({commentList.length})</h3>
        {commentList.length === 0 ? (
          <p className="text-slate-400 text-sm italic">No messages yet. Be the first to leave a message!</p>
        ) : (
          commentList.map((item: any) => (
            <div key={item.id} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-slate-800 text-sm">{item.name}</span>
                <span className="text-xs text-slate-400">{item.created_at ? new Date(item.created_at).toLocaleDateString() : ''}</span>
              </div>
              <p className="text-slate-600 text-sm">{item.message}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
