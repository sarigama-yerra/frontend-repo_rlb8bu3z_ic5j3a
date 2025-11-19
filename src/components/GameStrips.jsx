import { motion } from 'framer-motion'

// Mario / Crossy Road inspired strip banners with pixel-style blocks
export default function GameStrips() {
  const strips = [
    { theme: 'mario', colors: ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6'] },
    { theme: 'crossy', colors: ['#22c55e', '#84cc16', '#fde047', '#a3e635'] },
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="space-y-6">
          {strips.map((s, idx) => (
            <motion.div
              key={s.theme}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="grid grid-cols-24 gap-1"
            >
              {Array.from({ length: 24 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-8 rounded-sm"
                  initial={{ scaleY: 0.6 }}
                  whileHover={{ scaleY: 1.05 }}
                  animate={{ backgroundColor: s.colors[i % s.colors.length] }}
                  transition={{ duration: 0.6 }}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
