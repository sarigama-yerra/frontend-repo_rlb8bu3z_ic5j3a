import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0),rgba(59,130,246,0.1))]" />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            >
              Alex Vasiliu
              <span className="block mt-2 text-slate-300 text-xl font-normal">Mobile game developer & software engineer</span>
            </motion.h1>
            <p className="mt-6 text-slate-300 max-w-xl">
              Clean, minimal experiences with a focus on 2D puzzle games and solid software craftsmanship.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="px-5 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition">Start a project</a>
              <a href="#portfolio" className="px-5 py-3 rounded-lg bg-slate-800 text-slate-100 hover:bg-slate-700 transition">View work</a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl border border-slate-700/60 bg-slate-900 p-6">
              <div className="h-full w-full rounded-xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-slate-700/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
