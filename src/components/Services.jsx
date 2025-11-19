export default function Services() {
  const items = [
    { title: 'Game Development', desc: '2D puzzle games from concept to release: design, gameplay, art direction, and polish.' },
    { title: 'Software Development', desc: 'Native & cross‑platform mobile apps with strong engineering practices.' },
    { title: 'Architecture', desc: 'Clean architecture, modular codebases, CI/CD, and performance tuning.' },
    { title: 'Consultancy & Lead', desc: 'Hands-on leadership, mentoring, and strategic direction for teams.' },
  ]

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-white">Services</h2>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((s) => (
          <div key={s.title} className="rounded-xl border border-slate-700 bg-slate-900 p-5 text-slate-200 hover:border-slate-500 transition">
            <h3 className="font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
