export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-white">About</h2>
          <p className="mt-4 text-slate-300">
            I'm Alex Vasiliu, crafting minimal, intuitive mobile experiences. I build 2D puzzle games and robust software systems with a calm, detail-oriented approach.
          </p>
          <p className="mt-4 text-slate-300">
            I care about gameplay feel, performance, and maintainable architecture. I can help from concept to launch and beyond.
          </p>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-slate-200"><span className="inline-block w-2 h-2 rounded-full bg-blue-500"/>2D puzzle game design & prototyping</li>
          <li className="flex items-center gap-3 text-slate-200"><span className="inline-block w-2 h-2 rounded-full bg-blue-500"/>Mobile performance, polish, and UX</li>
          <li className="flex items-center gap-3 text-slate-200"><span className="inline-block w-2 h-2 rounded-full bg-blue-500"/>Clean, testable architecture</li>
          <li className="flex items-center gap-3 text-slate-200"><span className="inline-block w-2 h-2 rounded-full bg-blue-500"/>Leadership & mentoring</li>
        </ul>
      </div>
    </section>
  )
}
