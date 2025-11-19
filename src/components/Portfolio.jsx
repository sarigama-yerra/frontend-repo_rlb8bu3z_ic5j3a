import { motion } from 'framer-motion'

const placeholderProjects = [
  {
    title: 'Minimalist Puzzles',
    tag: 'iOS / Android',
    action: 'App Store',
    image: 'https://images.unsplash.com/photo-1606474359396-bfa94c14cef2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsaXN0JTIwUHV6emxlc3xlbnwwfDB8fHwxNzYzNTg2MjIwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Tactile Blocks',
    tag: 'Prototype',
    action: 'Preview',
    image: 'https://images.unsplash.com/photo-1545336168-d5541d41e21c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYWN0aWxlJTIwQmxvY2tzfGVufDB8MHx8fDE3NjM1ODYyMjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Path Lines',
    tag: 'Concept',
    action: 'Read',
    image: 'https://images.unsplash.com/photo-1636973609021-6a5749ddfb88?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYXRoJTIwTGluZXN8ZW58MHwwfHx8MTc2MzU4NjIyMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
]

export default function Portfolio() {
  const projects = placeholderProjects

  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold text-white">Portfolio</h2>
        <a href="#contact" className="text-sm text-blue-300 hover:text-blue-200">Have a project? Get in touch →</a>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href="#"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group rounded-xl border border-slate-700 bg-slate-900 overflow-hidden hover:border-slate-600 transition"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">{p.title}</h3>
                <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300">{p.tag}</span>
              </div>
              <button className="mt-3 text-sm text-blue-300 hover:text-blue-200">{p.action} →</button>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
