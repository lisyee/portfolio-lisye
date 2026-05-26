export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Work Experience</h2>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold text-slate-900">Software Engineer</h3>
          <p className="text-slate-500 font-medium">GMT Global Inc. (高明鐵企業股份有限公司) | Feb 2025 - Aug 2026</p>
          <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
            <li>Developed low-latency control solutions using EtherCAT protocols on Linux RT platforms.</li>
            <li>Optimized real-time image processing algorithms in C++ and OpenCV using CUDA kernels.</li>
            <li>Engineered seamless interoperability between low-level C++ DLLs and high-level C# applications.</li>
          </ul>
        </div>
        <div className="border-l-4 border-slate-300 pl-4">
          <h3 className="text-xl font-bold text-slate-900">AI Lab Project & Research Assistant</h3>
          <p className="text-slate-500 font-medium">National Dong Hwa University AI Lab | Jan 2023 - Dec 2024</p>
          <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
            <li>Managed high-performance AI servers and constructed a Docker Swarm cluster.</li>
            <li>Developed Speech-to-Text applications for Large Language Models (LLMs).</li>
            <li>Implemented TensorFlow, Scikit-learn, and OpenCV for Smart Solar Panel systems.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
