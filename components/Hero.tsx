export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(90,140,255,.25),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(242,169,59,.18),transparent_25%)]" />
      <div className="section relative grid min-h-[82vh] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="mb-4 text-lg text-saffron">ॐ नमः शिवाय</p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white sm:text-7xl">Discover the eternal wisdom of Lord Shiva.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Mahadev Adi Guru is a spiritual knowledge portal for learning, chanting, meditation, Jyotirlingas, temples, festivals and curated devotional references.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="btn btn-primary" href="#mantras">Start Chanting</a>
            <a className="btn btn-secondary" href="#learn">Explore Knowledge</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Cloudflare Pages', 'Free SSL', 'SEO Ready', 'CMS Ready'].map((x) => <span className="badge" key={x}>{x}</span>)}
          </div>
        </div>
        <div className="card relative min-h-[460px] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,169,59,.18),transparent_35%)]" />
          <div className="relative grid h-full place-items-center text-center">
            <div className="text-[11rem] leading-none text-white/90 drop-shadow-2xl">ॐ</div>
            <p className="mx-auto max-w-sm text-white/70">When the mind becomes still, Shiva is experienced within.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
