export default function Skills() {
  const skills = ['C++', 'C#', 'Python', 'JavaScript', 'React', 'OpenCV', 'CUDA', 'TensorFlow', 'GitLab CI/CD', 'Docker Swarm'];
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-slate-200 text-slate-800 px-3 py-1 rounded-md text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
