"use client";
import { sql } from '@vercel/postgres';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Awards from '../components/Awards';
import Guestbook from '../components/Guestbook';
import StyleSwitcher from '../components/StyleSwitcher';
import Chatbox from '../components/Chatbox'; 

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }: { searchParams: any }) {
  const errorMsg = searchParams?.error;

  const currentStyle = searchParams?.style || 'corporate';
  
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

  // DYNAMIC CSS THEMING LOGIC
  let pageBackground = "bg-slate-50 text-slate-950";
  let sectionWrapper = "bg-white p-6 rounded-xl shadow-md border border-slate-200";

  if (currentStyle === 'minimalist') {
    pageBackground = "bg-white text-slate-900";
    sectionWrapper = "bg-transparent py-4 border-b border-slate-100 last:border-none rounded-none shadow-none";
  } else if (currentStyle === 'brutalist') {
    pageBackground = "bg-orange-50/20 text-black";
    sectionWrapper = "bg-white p-6 rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]";
  }

  return (
    <div className={`${pageBackground} min-h-screen transition-colors duration-300`}>
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        
        <StyleSwitcher />
        
        <div className={sectionWrapper}>
          <Hero />
        </div>
        
        <div className={sectionWrapper}>
          <About />
        </div>
        
        <div className={sectionWrapper}>
          <Experience />
        </div>
        
        <div className={sectionWrapper}>
          <Skills />
        </div>
        
        <div className={sectionWrapper}>
          <Education />
        </div>
        
        <div className={sectionWrapper}>
          <Awards />
        </div>

        <div className={sectionWrapper}>
          <Chatbox />
        </div>
        
        <hr className={currentStyle === 'minimalist' ? 'hidden' : 'border-slate-200'} />
        
        <div className={currentStyle === 'minimalist' ? 'bg-transparent shadow-none border-none p-0' : ''}>
          <Guestbook commentList={commentList} errorMsg={errorMsg} dbConnected={dbConnected} />
        </div>
        
      </main>
    </div>
  );
}
