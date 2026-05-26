export default function Education() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Education</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Master's Degree</span>
          <h3 className="font-bold text-slate-900 text-lg mt-0.5">Master of Science in CSIE</h3>
          <p className="text-slate-600 text-sm font-medium">National Dong Hwa University, Taiwan</p>
          <p className="text-slate-500 text-xs mt-2">GPA: 4.5 / 4.5 | AI Lab Research Focus</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Bachelor's Degree</span>
          <h3 className="font-bold text-slate-900 text-lg mt-0.5">Bachelor of Computer Science</h3>
          <p className="text-slate-600 text-sm font-medium">Atma Jaya Makassar University, Indonesia</p>
          <p className="text-slate-500 text-xs mt-2">GPA: 3.76 / 4.00 | Graduated with Honor</p>
        </div>
      </div>
    </section>
  );
}
