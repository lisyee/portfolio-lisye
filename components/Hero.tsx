export default function Hero() {
  return (
    <header className="text-center md:text-left md:flex items-center justify-between border-b pb-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Ms. Lisye</h1>
        <p className="text-xl text-blue-600 font-medium mt-2">Software Engineer (Computer Vision, AI & Robotics)</p>
        <p className="text-slate-500 mt-1">Taipei, Taiwan | lisyelisyee@gmail.com</p>
      </div>
      <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 inline-block">
        Available to Relocate
      </div>
    </header>
  );
}
