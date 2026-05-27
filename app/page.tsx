import { sql } from '@vercel/postgres';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Awards from '../components/Awards';
import Guestbook from '../components/Guestbook';
import StyleSwitcher from '../components/StyleSwitcher';

export default async function Home({ searchParams }: { searchParams: any }) {
  const errorMsg = searchParams?.error;
  
  // Read the active style from the URL (?style=...), defaulting to 'corporate'
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
  let sectionWrapper = "bg-white p-6 rounded-xl shadow-md border border-slate-200"; // Style 1: Corporate

  if (currentStyle === 'minimalist') {
    // Style 2: Minimalist Modern (Clean, spacious, no shadows or thick borders)
    pageBackground = "bg-white text-slate-900";
    sectionWrapper = "bg-transparent py-4 border-b border-slate-100 last:border-none rounded-none shadow-none";
  } else if (currentStyle === 'brutalist') {
    // Style 3: Neo-Brutalisme (Thick black borders, sharp corners, solid hard shadows)
    pageBackground = "bg-orange-50/20 text-black";
    sectionWrapper = "bg-white p-6 rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]";
  }

  return (
    <div className={`${pageBackground} min-h-screen transition-colors duration-300`}>
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        
        {/* Interactive Style Switcher */}
        <StyleSwitcher />
        
        {/* All components dynamically inherit the selected layout style */}
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
        
        <hr className={currentStyle === 'minimalist' ? 'hidden' : 'border-slate-200'} />
        
        {/* Guestbook section styling handling */}
        <div className={currentStyle === 'minimalist' ? 'bg-transparent shadow-none border-none p-0' : ''}>
          <Guestbook commentList={commentList} errorMsg={errorMsg} dbConnected={dbConnected} />
        </div>
        
      </main>
    </div>
  );
}
