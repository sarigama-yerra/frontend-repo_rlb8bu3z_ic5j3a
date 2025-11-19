import { motion, useMotionValue, useTransform } from 'framer-motion'

// Lightweight 3D showcase: CSS Rubik's Cube + voxel blocks with subtle parallax
export default function ThreeShowcase() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useTransform(my, [-200, 200], [10, -10])
  const rotY = useTransform(mx, [-200, 200], [-10, 10])

  // Mouse move listener attached to section root via onMouseMove
  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    mx.set(e.clientX - cx)
    my.set(e.clientY - cy)
  }

  return (
    <section onMouseMove={handleMouse} className="relative overflow-hidden border-y border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-start justify-between gap-10 flex-col lg:flex-row">
          {/* Rubik's Cube */}
          <motion.div
            style={{ rotateX: rotX, rotateY: rotY }}
            className="mx-auto lg:mx-0 perspective-[1200px]"
          >
            <div className="relative size-60 sm:size-72 mx-auto [transform-style:preserve-3d] animate-[spinCube_18s_linear_infinite]">
              {/* 6 faces */}
              {[
                { t: 'translateZ(6rem)', face: 'front' },
                { t: 'rotateY(180deg) translateZ(6rem)', face: 'back' },
                { t: 'rotateY(90deg) translateZ(6rem)', face: 'right' },
                { t: 'rotateY(-90deg) translateZ(6rem)', face: 'left' },
                { t: 'rotateX(90deg) translateZ(6rem)', face: 'top' },
                { t: 'rotateX(-90deg) translateZ(6rem)', face: 'bottom' },
              ].map((f, i) => (
                <div
                  key={i}
                  className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-1 [backface-visibility:visible]"
                  style={{ transform: f.t }}
                >
                  {Array.from({ length: 9 }).map((_, j) => (
                    <div
                      key={j}
                      className="rounded-sm border border-slate-800/40"
                      style={{
                        background: rubikColor(f.face, j),
                        boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.3)'
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Voxel road / blocks (Crossy Road-inspired) */}
          <div className="flex-1 w-full">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white">Playful 3D accents</h2>
              <p className="mt-2 text-slate-300 max-w-prose">A lightweight 3D cube and voxel blocks add tactile depth while keeping the minimal aesthetic. Perfect for puzzle and arcade vibes.</p>
            </div>
            <div className="relative w-full aspect-[16/10] mx-auto perspective-[1000px]">
              <motion.div
                style={{ rotateX: 20, rotateY: rotY }}
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
              >
                {/* Create a path of cubes */}
                {Array.from({ length: 10 }).map((_, i) => (
                  <VoxelCube key={i} x={i * 2} y={0} z={i % 2 === 0 ? 0 : -0.8} delay={i * 0.06} />
                ))}
                {/* Some side blocks */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <VoxelCube key={`s-${i}`} x={i * 2 + 1} y={0} z={-2.5} colorVariant="grass" delay={0.4 + i * 0.05} />
                ))}
                {/* Coin-like blocks */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <VoxelCube key={`c-${i}`} x={i * 4 + 2} y={2} z={-1.2} colorVariant="coin" float delay={0.2 + i * 0.1} />
                ))}
              </motion.div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-slate-950" />
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for cube spin */}
      <style>{`
        @keyframes spinCube { to { transform: rotateX(360deg) rotateY(360deg); } }
      `}</style>
    </section>
  )
}

function rubikColor(face, index) {
  const colors = {
    front: ['#f43f5e', '#ef4444', '#f59e0b'], // reds/orange
    back: ['#22c55e', '#10b981', '#84cc16'], // greens
    right: ['#3b82f6', '#60a5fa', '#38bdf8'], // blues
    left: ['#f59e0b', '#eab308', '#f97316'], // yellows/orange
    top: ['#e5e7eb', '#cbd5e1', '#94a3b8'], // light
    bottom: ['#0ea5e9', '#06b6d4', '#14b8a6'], // teals
  }
  const palette = colors[face] || ['#64748b']
  return palette[index % palette.length]
}

function VoxelCube({ x = 0, y = 0, z = 0, size = 32, colorVariant = 'stone', float = false, delay = 0 }) {
  const palette = {
    stone: ['#334155', '#1f2937'],
    grass: ['#22c55e', '#16a34a'],
    coin: ['#f59e0b', '#d97706'],
  }[colorVariant]

  const face = (extra = '') => `absolute inset-0 ${extra}`

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="absolute"
      style={{
        transformStyle: 'preserve-3d',
        transform: `translate3d(${x * size}px, ${-y * size}px, ${z * size}px)`
      }}
    >
      <motion.div
        className="relative"
        animate={float ? { y: [0, -6, 0] } : {}}
        transition={float ? { duration: 2.2, repeat: Infinity, ease: 'easeInOut' } : {}}
        style={{ width: size, height: size }}
      >
        {/* 6 faces */}
        <div className={face()} style={{ transform: `rotateX(90deg) translateZ(${size / 2}px)`, background: shade(palette[0], 0.1) }} />
        <div className={face()} style={{ transform: `rotateX(-90deg) translateZ(${size / 2}px)`, background: shade(palette[0], -0.05) }} />
        <div className={face()} style={{ transform: `translateZ(${size / 2}px)`, background: palette[0] }} />
        <div className={face()} style={{ transform: `rotateY(180deg) translateZ(${size / 2}px)`, background: shade(palette[0], -0.15) }} />
        <div className={face()} style={{ transform: `rotateY(90deg) translateZ(${size / 2}px)`, background: shade(palette[1], 0.05) }} />
        <div className={face()} style={{ transform: `rotateY(-90deg) translateZ(${size / 2}px)`, background: shade(palette[1], -0.05) }} />
        {/* simple bevel shadow */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-2 rounded-full bg-black/30 blur-sm" />
      </motion.div>
    </motion.div>
  )
}

function shade(hex, amt) {
  // crude hex shade util
  let col = hex.replace('#','')
  if (col.length === 3) col = col.split('').map(c => c + c).join('')
  const num = parseInt(col, 16)
  let r = (num >> 16) + Math.round(255 * amt)
  let g = ((num >> 8) & 0x00FF) + Math.round(255 * amt)
  let b = (num & 0x0000FF) + Math.round(255 * amt)
  r = Math.max(0, Math.min(255, r))
  g = Math.max(0, Math.min(255, g))
  b = Math.max(0, Math.min(255, b))
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}
