export default function Portfolio() {
  const projects = [
    { title: 'Minimalist Puzzles', tag: 'iOS / Android', action: 'Coming soon' },
    { title: 'Tactile Blocks', tag: 'Prototype', action: 'Playtest' },
    { title: 'Path Lines', tag: 'Concept', action: 'Preview' },
  ]

  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold text-white">Portfolio</h2>
        <a href="#contact" className="text-sm text-blue-300 hover:text-blue-200">Have a project? Get in touch →</a>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="group rounded-xl border border-slate-700 bg-slate-900 overflow-hidden">
            <div className="aspect-video bg-slate-800/60 group-hover:bg-slate-800 transition" />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">{p.title}</h3>
                <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300">{p.tag}</span>
              </div>
              <button className="mt-3 text-sm text-blue-300 hover:text-blue-200">{p.action} →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
