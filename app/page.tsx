import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

// Function to save a comment to the Vercel database
async function addComment(formData: FormData) {
  'use server';
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  if (!name || !message) return;

  try {
    // Automatically create the table if it doesn't exist when the first comment is submitted
    await sql`
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await sql`INSERT INTO comments (name, message) VALUES (${name}, ${message});`;
    revalidatePath('/');
  } catch (error) {
    console.error("Failed to save comment:", error);
  }
}

export default async function Home() {
  // Fetch comments from the database
  let commentList = [];
  try {
    const { rows } = await sql`SELECT * FROM comments ORDER BY created_at DESC;`;
    commentList = rows;
  } catch (e) {
    // If the table hasn't been created yet, keep the array empty
    commentList = [];
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* HERO SECTION */}
      <header className="text-center md:text-left md:flex items-center justify-between border-b pb-8 mb-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Ms. Lisye</h1>
          <p className="text-xl text-blue-600 font-medium mt-2">Software Engineer (Computer Vision, AI & Robotics)</p>
          <p className="text-slate-500 mt-1">Taipei, Taiwan | lisyelisyee@gmail.com</p>
        </div>
        <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
          Available to Relocate
        </div>
      </header>

      {/* ABOUT ME */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">About Me</h2>
        <p className="text-slate-600 leading-relaxed text-lg">
          High-performance Software Engineer with over 3 years of combined practical and research experience in 
          Computer Vision, Robotics, and Industrial Automation. Expert in developing real-time, low-latency applications 
          by translating complex MATLAB models into production-ready C++ and C# code.
        </p>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="mb-12">
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

      {/* SKILLS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['C++', 'C#', 'Python', 'JavaScript', 'React', 'OpenCV', 'CUDA', 'TensorFlow', 'GitLab CI/CD', 'Docker Swarm'].map((skill) => (
            <span key={skill} className="bg-slate-200 text-slate-800 px-3 py-1 rounded-md text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mb-12">
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

      <hr className="my-12" />

      {/* GUESTBOOK SECTION */}
      <section className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Guestbook / Leave a Message</h2>
        <p className="text-slate-500 mb-6 text-sm">Testing area for interviewers to submit feedback or messages.</p>

        {/* Comment Input Form */}
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

        {/* Display Comments List */}
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-700 border-b pb-2">Recent Messages ({commentList.length})</h3>
          {commentList.length === 0 ? (
            <p className="text-slate-400 text-sm italic">No messages yet. Be the first to leave a message!</p>
          ) : (
            commentList.map((item: any) => (
              <div key={item.id} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-800 text-sm">{item.name}</span>
                  <span className="text-xs text-slate-400">{new Date(item.created_at).toLocaleDateString()}</span>
                </div>
                <p className="text-slate-600 text-sm">{item.message}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
