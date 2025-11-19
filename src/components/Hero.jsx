import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function Hero() {
  // Subtle parallax based on mouse
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-200, 200], [8, -8])
  const rotateY = useTransform(mx, [-200, 200], [-8, 8])
  const translate = useTransform(mx, [-200, 200], [-6, 6])

  useEffect(() => {
    const handler = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      mx.set(e.clientX - cx)
      my.set(e.clientY - cy)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [mx, my])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0),rgba(59,130,246,0.12))]" />

      {/* Floating puzzle shapes */}
      <motion.div
        className="pointer-events-none absolute -top-10 -right-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 -left-10 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.1 }}
      />

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

          {/* Device mockup with animated gameplay preview */}
          <motion.div
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-sm aspect-[9/19.5] rounded-[2.5rem] border border-slate-700/60 bg-slate-900 p-3 shadow-[0_40px_120px_-20px_rgba(29,78,216,0.35)]">
              <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />
              <div className="h-full w-full rounded-[2rem] overflow-hidden bg-slate-950 border border-slate-800">
                {/* Animated puzzle board (CSS-driven) */}
                <div className="h-full w-full grid grid-cols-6 gap-1 p-3 bg-slate-950">
                  {Array.from({ length: 90 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="aspect-square rounded-sm"
                      style={{ translateX: translate }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: 1,
                        scale: [1, 1.06, 1],
                        backgroundColor: [
                          'rgba(30,41,59,0.9)',
                          'rgba(59,130,246,0.35)',
                          'rgba(30,41,59,0.9)'
                        ],
                      }}
                      transition={{ duration: 2 + (i % 6) * 0.08, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  ))}
                </div>
                {/* Optional external image/video overlay (replace srcs as needed) */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* If you want to show a real gameplay image, uncomment and update the src below */}
                  {/* <img src="https://images.unsplash.com/photo-1640955014216-75201056c829?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHYW1lcGxheXxlbnwwfDB8fHwxNzYzNTg2MjE5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Gameplay" className="h-full w-full object-cover" /> */}
                </div>
              </div>
            </div>

            {/* Floating UI chips */}
            <motion.div
              className="absolute -left-6 -bottom-4 px-3 py-1.5 rounded-full text-xs bg-slate-800/80 border border-slate-700 text-slate-200 backdrop-blur"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              2D Puzzle · iOS · Android
            </motion.div>
            <motion.div
              className="absolute -right-4 -top-4 px-3 py-1.5 rounded-full text-xs bg-blue-500/20 border border-blue-400/30 text-blue-200 backdrop-blur"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Clean & tactile feel
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
