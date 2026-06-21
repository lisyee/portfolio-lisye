export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Work Experience</h2>
      <div className="space-y-8">
        {/* GMT Global Inc */}
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold text-slate-900">Software Engineer</h3>
          <p className="text-slate-500 font-medium">高明鐵企業股份有限公司 (GMT Global Inc.) | Feb 2025 - July 2026</p>
          {/* Changed to list-outside pl-5 for perfect alignment */}
          <ul className="list-disc list-outside pl-5 text-slate-600 mt-2 space-y-2">
            <li className="text-justify">
              <strong>Automation & Control:</strong> Programmed low-latency machine control solutions using EtherCAT protocols on Linux RT and INtime platforms to ensure high-precision hardware synchronization.
            </li>
            <li className="text-justify">
              <strong>High-Performance Computing:</strong> Wrote and optimized image processing algorithms in C++ and OpenCV, using CUDA kernels to offload intensive calculations to the GPU for multi-camera setups on LinuxRT platform.
            </li>
            <li className="text-justify">
              <strong>Systems Integration:</strong> Used P/Invoke to link low-level C++ DLLs with high-level C# desktop applications, fixing data flow bottlenecks in critical industrial environments.
            </li>
            <li className="text-justify">
              <strong>Model Translation:</strong> Translated complex kinematic and mathematical models from MATLAB into real-time, production-ready C++ code for Stewart platforms.
            </li>
            <li className="text-justify">
              <strong>DevOps & Workflow:</strong> Cleaned up legacy codebases by moving everything to GitLab, establishing clear multi-repository structures and standard version control rules for the team.
            </li>
          </ul>
        </div>

        {/* NDHU AI Lab - Project Assistant */}
        <div className="border-l-4 border-slate-300 pl-4">
          <h3 className="text-xl font-bold text-slate-900">Artificial Intelligence (AI) Lab Project Assistant</h3>
          <p className="text-slate-500 font-medium">AI Lab, National Dong Hwa University | Sep 2024 - Dec 2024</p>
          <ul className="list-disc list-outside pl-5 text-slate-600 mt-2 space-y-2">
            
            <li className="text-justify">
              <strong>AI Agent & RAG Architecture:</strong> Built an AI Agent from scratch using AWS Bedrock (Amazon Nova) and Amazon OpenSearch Serverless for RAG. Configured intent routing in the knowledge base to stop model hallucinations and improve retrieval accuracy.
            </li>
            <li className="text-justify">
              <strong>API & Full-Stack Integration:</strong> Created a secure React chat interface that talks to AWS Bedrock via Python (Boto3) and Vercel Serverless, keeping all API keys safe using environment variables.
            </li>
            <li className="text-justify">
              <strong>Performance & FinOps:</strong> Reduced chat latency by handling data as asynchronous byte streams for instant responses, and kept AWS costs down by managing cloud compute-unit (OCU) lifecycles.
            </li>
            <li className="text-justify">
              <strong>System Upkeep:</strong> Maintained the lab's high-performance servers and set up a Docker Swarm cluster to handle heavy, parallel AI training workloads without downtime.
            </li>
          </ul>
        </div>

        {/* NDHU AI Lab - Research Assistant */}
        <div className="border-l-4 border-slate-300 pl-4">
          <h3 className="text-xl font-bold text-slate-900">AI Research Assistant</h3>
          <p className="text-slate-500 font-medium">AI Lab, National Dong Hwa University | Jan 2023 - Jun 2024</p>
          <ul className="list-disc list-outside pl-5 text-slate-600 mt-2 space-y-2">
            <li className="text-justify">
              <strong>Predictive Analytics:</strong> Built a student performance early-warning system by training Random Forest models to analyze academic datasets and predict GPAs.
            </li>
            <li className="text-justify">
              <strong>AI Module Development:</strong> Used TensorFlow, Scikit-learn, and OpenCV to build core features for lab projects, including a solar panel assessment tool and a remote vet service platform.
            </li>
            <li className="text-justify">
              <strong>Technical Troubleshooting:</strong> Worked with other researchers to debug performance issues and integrate machine learning models into high-computation environments.
            </li>
          </ul>
        </div>

        {/* Teaching Assistant */}
        <div className="border-l-4 border-slate-300 pl-4">
          <h3 className="text-xl font-bold text-slate-900">Teaching Assistant</h3>
          <p className="text-slate-500 font-medium">Fundamental Mobile Programming Course, National Dong Hwa University | Feb 2023 - Jan 2024</p>
          <ul className="list-disc list-outside pl-5 text-slate-600 mt-2 space-y-2">
            <li className="text-justify">
              <strong>Technical Communication:</strong> Taught and managed lab sections of 160 students for a mobile programming course, earning a 4.3/4.5 instructor rating.
            </li>
            <li className="text-justify">
              <strong>Assessment Design:</strong> Designed exams and practical coding quizzes to test students' programming logic and project work.
            </li>
          </ul>
        </div>

        {/* Other Professional Experience */}
        <div className="border-l-4 border-slate-300 pl-4">
          <h3 className="text-xl font-bold text-slate-900">Other Professional Experience</h3>
          <p className="text-slate-500 font-medium">Indonesia | Feb 2018 - June 2022</p>
          <ul className="list-disc list-outside pl-5 text-slate-600 mt-2 space-y-2">
            <li className="text-justify">
              <strong>Computer Science Private Tutor (2019 - 2022):</strong> Tutored students in Java, C++, and basic web development (HTML/CSS/JS).
            </li>
            <li className="text-justify">
              <strong>IT Operational Staff (2018):</strong> Worked as IT operational staff, managing customer data systems and testing mobile apps before launch for a fintech company.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
