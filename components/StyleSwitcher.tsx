'use client';

export default function StyleSwitcher() {
  // Function to change the website layout style by updating the URL query parameter
  const changeStyle = (styleName: string) => {
    window.location.search = `?style=${styleName}`;
  };

  return (
    <div className="flex flex-wrap items-center justify-between p-3 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 gap-4 mb-6">
      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
        🎨 Switch Website CSS Style:
      </div>
      <div className="flex flex-wrap gap-2">
        <button 
          onClick={() => changeStyle('corporate')} 
          className="px-3 py-1.5 text-xs font-bold rounded-lg bg-white border shadow-sm hover:bg-slate-50 text-slate-800 transition duration-200"
        >
          💼 Corporate Professional
        </button>
        <button 
          onClick={() => changeStyle('minimalist')} 
          className="px-3 py-1.5 text-xs font-bold rounded-lg bg-white border shadow-sm hover:bg-slate-50 text-slate-800 transition duration-200"
        >
          🌱 Minimalist Modern
        </button>
        <button 
          onClick={() => changeStyle('brutalist')} 
          className="px-3 py-1.5 text-xs font-bold rounded-lg bg-white border shadow-sm hover:bg-slate-50 text-slate-800 transition duration-200"
        >
          ⚡ Neo-Brutalist (Tech Retro)
        </button>
      </div>
    </div>
  );
}
