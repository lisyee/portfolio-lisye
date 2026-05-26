export default function Hero() {
  return (
    <header className="text-center md:text-left md:flex items-center justify-between border-b pb-8 gap-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Profile Picture */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-md flex-shrink-0">
          <img 
            src="/profile.jpg" 
            alt="Ms. Lisye" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Profile Details */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Ms. Lisye</h1>
          <p className="text-xl text-blue-600 font-medium mt-2">Software Engineer (Computer Vision, AI & Robotics)</p>
          <p className="text-slate-500 mt-1">Taipei, Taiwan | lisyelisyee@gmail.com</p>
        </div>
      </div>
      
      <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 inline-block self-center md:self-auto">
        Available to Relocate
      </div>
    </header>
  );
}
