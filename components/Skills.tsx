export default function Skills() {
  const languages = ['C++', 'C#', 'C', 'Python', 'JavaScript', 'HTML', 'PHP', 'CSS'];
  const frameworks = ['OpenCV', 'CUDA', 'TensorFlow', 'Scikit-learn', 'React'];
  const tools = ['GitLab (CI/CD)', 'Docker Swarm', 'EtherCAT', 'Linux RT', 'MATLAB', 'INtime', 'NexECM'];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 border-b pb-2">Skills & Languages</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-slate-700 mb-2">Programming Languages</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((skill) => (
              <span key={skill} className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md text-sm font-medium border">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-700 mb-2">Frameworks & Libraries</h3>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((skill) => (
              <span key={skill} className="bg-blue-50 text-blue-800 px-2.5 py-1 rounded-md text-sm font-medium border border-blue-100">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-700 mb-2">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((skill) => (
              <span key={skill} className="bg-slate-800 text-slate-100 px-2.5 py-1 rounded-md text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-dashed">
        <h3 className="font-semibold text-slate-700 mb-2">Language Proficiencies</h3>
        <div className="flex gap-4 text-sm text-slate-600">
          <p>🇮🇩 <strong>Indonesian:</strong> Native</p>
          <p>🇬🇧 <strong>English:</strong> Professional (TOEIC 880)</p>
          <p>🇹🇼 <strong>Mandarin:</strong> Conversational (TOCFL B1 / Level 3)</p>
        </div>
      </div>
    </section>
  );
}
