export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Work Experience</h2>
      <div className="space-y-8">
        {/* GMT Global Inc */}
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold text-slate-900">Software Engineer</h3>
          <p className="text-slate-500 font-medium">高明鐵企業股份有限公司 (GMT Global Inc.) | Feb 2025 - Aug 2026</p>
          {/* Changed to list-outside pl-5 for perfect alignment */}
          <ul className="list-disc list-outside pl-5 text-slate-600 mt-2 space-y-2">
            {/* Added text-justify to each list item */}
            <li className="text-justify">
              <strong>Manufacturing Automation & Control:</strong> Developed low-latency control solutions using EtherCAT protocols (NexECM) on Linux RT and INtime platforms, ensuring high-precision synchronization for multi-device Industrial PC (IPC) environments.
            </li>
            <li className="text-justify">
              <strong>High-Performance Computing:</strong> Developed and optimized real-time image processing algorithms in C++ and OpenCV, implementing CUDA kernels to offload intensive computations to the GPU, significantly increasing throughput for multi-camera systems.
            </li>
            <li className="text-justify">
              <strong>Systems Integration (C++/C#):</strong> Engineered seamless interoperability between low-level C++ DLLs and high-level C# applications via P/Invoke, optimizing data flow within Windows-based mission-critical environments.
            </li>
            <li className="text-justify">
              <strong>Robotics & Kinematics:</strong> Designed and implemented complex Inverse Kinematics (IK) solvers for Stewart platforms and hexapod systems, translating mathematical models from MATLAB into production-ready, real-time C++ code.
            </li>
            <li className="text-justify">
              <strong>Lifecycle & Architecture:</strong> Led the migration of legacy codebases to GitLab, establishing modular multi-repository structures and standardized version control workflows to improve team collaboration and software maintainability.
            </li>
          </ul>
        </div>

        {/* NDHU AI Lab - Project Assistant */}
        <div className="border-l-4 border-slate-300 pl-4">
          <h3 className="text-xl font-bold text-slate-900">Artificial Intelligence (AI) Lab Project Assistant</h3>
          <p className="text-slate-500 font-medium">AI Lab, National Dong Hwa University | Sep 2024 - Dec 2024</p>
          <ul className="list-disc list-outside pl-5 text-slate-600 mt-2 space-y-2">
            <li className="text-justify">
              <strong>Infrastructure & System Monitoring:</strong> Managed high-performance AI lab servers and constructed a Docker Swarm cluster to facilitate scalable parallel processing and minimize downtime.
            </li>
            <li className="text-justify">
              <strong>Hardware Optimization:</strong> Built and configured high-end PC/Server infrastructure to enhance lab computational capacity for intensive AI training.
            </li>
            <li className="text-justify">
              <strong>LLM Development:</strong> Developed and optimized Speech-to-Text applications for Large Language Models (LLMs), focusing on improving natural language processing efficiency and system integration.
            </li>
          </ul>
        </div>

        {/* NDHU AI Lab - Research Assistant */}
        <div className="border-l-4 border-slate-300 pl-4">
          <h3 className="text-xl font-bold text-slate-900">AI Research Assistant</h3>
          <p className="text-slate-500 font-medium">AI Lab, National Dong Hwa University | Jan 2023 - Jun 2024</p>
          <ul className="list-disc list-outside pl-5 text-slate-600 mt-2 space-y-2">
            <li className="text-justify">
              <strong>Predictive Analytics:</strong> Developed an early-warning system for student performance using Random Forest algorithms, analyzing complex datasets to predict GPAs and improve educational outcomes.
            </li>
            <li className="text-justify">
              <strong>Full-Stack AI Research:</strong> Implemented TensorFlow, Scikit-learn, and OpenCV to build diverse projects, including a Smart Solar Panel Site Assessment System and Remote Veterinarian Services.
            </li>
            <li className="text-justify">
              <strong>Systems Troubleshooting:</strong> Collaborated with researchers to integrate AI-driven solutions and resolve technical bottlenecks in high-computation environments.
            </li>
          </ul>
        </div>

        {/* Teaching Assistant */}
        <div className="border-l-4 border-slate-300 pl-4">
          <h3 className="text-xl font-bold text-slate-900">Teaching Assistant</h3>
          <p className="text-slate-500 font-medium">Fundamental Mobile Programming Course, National Dong Hwa University | Feb 2023 - Jan 2024</p>
          <ul className="list-disc list-outside pl-5 text-slate-600 mt-2 space-y-2">
            <li className="text-justify">
              <strong>Leadership & Scale:</strong> Supervised sections of 160 students for the Fundamental Mobile Programming course; achieved a 4.3/4.5 student evaluation rating, reflecting excellence in technical communication.
            </li>
            <li className="text-justify">
              <strong>Assessment Design:</strong> Created comprehensive examinations and quizzes to evaluate programming proficiency and project-based learning.
            </li>
          </ul>
        </div>

        {/* Other Professional Experience */}
        <div className="border-l-4 border-slate-300 pl-4">
          <h3 className="text-xl font-bold text-slate-900">Other Professional Experience</h3>
          <p className="text-slate-500 font-medium">Freelance & Corporate Roles | Feb 2018 - June 2022</p>
          <ul className="list-disc list-outside pl-5 text-slate-600 mt-2 space-y-2">
            <li className="text-justify">
              <strong>Computer Science Private Tutor (2019 - 2022):</strong> Mentored students in Java, C++, and Web Development (HTML/CSS/JS), fostering long-term interest in software engineering.
            </li>
            <li className="text-justify">
              <strong>IT Operational Staff (2018):</strong> Managed customer data systems and performed pre-launch mobile application testing for a fintech company.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
