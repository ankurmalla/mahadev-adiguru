import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { articles, jyotirlingas, mantras, videos } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="learn" className="section">
          <div className="mb-10 max-w-3xl">
            <p className="text-saffron">Knowledge Foundation</p>
            <h2 className="mt-2 text-4xl font-black text-white">Begin learning about Lord Shiva</h2>
            <p className="mt-4 text-white/65">These become full CMS-managed articles in the next phase.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map(([title, desc]) => (
              <article className="card" key={title}>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-white/65">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="mantras" className="section">
          <div className="mb-10 max-w-3xl">
            <p className="text-saffron">Chant & Understand</p>
            <h2 className="mt-2 text-4xl font-black text-white">Shiva Mantra Library</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {mantras.map((m) => (
              <article className="card" key={m.name}>
                <h3 className="text-2xl font-bold text-white">{m.name}</h3>
                <p className="mt-5 text-3xl text-saffron">{m.sanskrit}</p>
                <p className="mt-5 text-white/70">{m.meaning}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="jyotirlingas" className="section">
          <div className="mb-10 max-w-3xl">
            <p className="text-saffron">Sacred Geography</p>
            <h2 className="mt-2 text-4xl font-black text-white">The 12 Jyotirlingas</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {jyotirlingas.map((name, i) => (
              <div className="card" key={name}>
                <span className="text-sm text-saffron">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-xl font-bold text-white">{name}</h3>
                <p className="mt-2 text-sm text-white/60">Dedicated page with story, travel guide, map and references.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="videos" className="section">
          <div className="mb-10 max-w-3xl">
            <p className="text-saffron">Curated References</p>
            <h2 className="mt-2 text-4xl font-black text-white">YouTube Learning & Devotion</h2>
            <p className="mt-4 text-white/65">Embed official YouTube references. Do not download or re-upload copyrighted videos.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {videos.map(([title, url]) => (
              <article className="card" key={title}>
                <div className="aspect-video overflow-hidden rounded-2xl border border-white/10">
                  <iframe className="h-full w-full" src={url} title={title} allowFullScreen />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="roadmap" className="section">
          <div className="card grid gap-8 lg:grid-cols-3">
            <div>
              <p className="text-saffron">Next Phase</p>
              <h2 className="mt-2 text-4xl font-black text-white">CMS and PostgreSQL</h2>
            </div>
            <div className="lg:col-span-2 grid gap-4 md:grid-cols-3">
              {['Strapi CMS', 'Neon PostgreSQL', 'Cloudflare Pages'].map((x) => <div className="rounded-2xl bg-white/5 p-5" key={x}><b className="text-white">{x}</b><p className="mt-2 text-sm text-white/60">Production-ready upgrade path.</p></div>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
