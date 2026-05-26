export default function Education() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Education</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-sm border">
          <h3 className="font-bold text-slate-900">Master of Science in CS</h3>
          <p className="text-slate-600 text-sm">National Dong Hwa University, Taiwan (GPA: 4.5/4.5)</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm border">
          <h3 className="font-bold text-slate-900">Bachelor of Computer Science</h3>
          <p className="text-slate-600 text-sm">Atma Jaya Makassar University, Indonesia</p>
        </div>
      </div>
    </section>
  );
}
