export default function TechStack() {
  const tools = [
    { name: 'iOS', detail: 'Swift, SwiftUI' },
    { name: 'Android', detail: 'Kotlin, Jetpack' },
    { name: 'Cross‑platform', detail: 'Unity, React Native' },
    { name: 'Backend', detail: 'FastAPI, MongoDB' },
    { name: 'Build/CI', detail: 'Xcode Cloud, GitHub Actions' },
  ]

  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map(t => (
          <div key={t.name} className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <div className="text-white font-medium">{t.name}</div>
            <div className="text-slate-300 text-sm mt-1">{t.detail}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
