export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-kailash/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-3 font-bold text-white">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-saffron text-xl text-kailash">ॐ</span>
          <span>Mahadev <span className="text-saffron">Adi Guru</span></span>
        </a>
        <div className="hidden gap-6 text-sm text-white/75 md:flex">
          <a href="#learn" className="hover:text-white">Learn</a>
          <a href="#mantras" className="hover:text-white">Mantras</a>
          <a href="#jyotirlingas" className="hover:text-white">Jyotirlingas</a>
          <a href="#videos" className="hover:text-white">Videos</a>
          <a href="#roadmap" className="hover:text-white">Roadmap</a>
        </div>
      </nav>
    </header>
  );
}
