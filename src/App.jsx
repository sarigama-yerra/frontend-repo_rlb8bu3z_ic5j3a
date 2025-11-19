import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Alex Vasiliu</a>
          <nav className="hidden sm:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#stack" className="hover:text-white">Tech</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <TechStack />
        <Contact />
      </main>

      <footer className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Alex Vasiliu</p>
          <div className="flex gap-4">
            <a href="mailto:hello@example.com" className="hover:text-slate-200">Email</a>
            <a href="#" className="hover:text-slate-200">Twitter</a>
            <a href="#" className="hover:text-slate-200">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
