import { sql } from '@vercel/postgres';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Guestbook from '../components/Guestbook';

export default async function Home({ searchParams }: { searchParams: any }) {
  const errorMsg = searchParams?.error;
  let commentList = [];
  let dbConnected = true;

  try {
    const { rows } = await sql`SELECT * FROM comments ORDER BY created_at DESC;`;
    commentList = rows;
  } catch (e) {
    commentList = [];
    if (!process.env.POSTGRES_URL) {
      dbConnected = false;
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <hr className="border-slate-200" />
      <Guestbook commentList={commentList} errorMsg={errorMsg} dbConnected={dbConnected} />
    </main>
  );
}
