import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', project_type: '', budget_range: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '', project_type: '', budget_range: '' })
    } catch (err) {
      setStatus(err.message || 'error')
    }
  }

  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-white">Contact</h2>
      <p className="mt-2 text-slate-300">Tell me about your game or app. I’ll get back within 24–48 hours.</p>
      <form onSubmit={onSubmit} className="mt-8 grid gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={onChange} placeholder="Name" required className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-500" />
          <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" required className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-500" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <select name="project_type" value={form.project_type} onChange={onChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-slate-100">
            <option value="">Project type (optional)</option>
            <option value="game">Game</option>
            <option value="app">App</option>
            <option value="architecture">Architecture</option>
            <option value="consultancy">Consultancy</option>
          </select>
          <select name="budget_range" value={form.budget_range} onChange={onChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-slate-100">
            <option value="">Budget (optional)</option>
            <option value="<5k">Under $5k</option>
            <option value="5k-15k">$5k–$15k</option>
            <option value="15k-50k">$15k–$50k</option>
            <option value=">50k">$50k+</option>
          </select>
        </div>
        <textarea name="message" value={form.message} onChange={onChange} placeholder="Project details" required rows={6} className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-500" />
        <button type="submit" disabled={status==='sending'} className="rounded-lg bg-blue-500 hover:bg-blue-400 disabled:opacity-60 px-5 py-3 text-white">{status==='sending' ? 'Sending...' : 'Send message'}</button>
        {status==='success' && <p className="text-green-400">Thanks! Your message was sent.</p>}
        {status && status!=='success' && status!=='sending' && <p className="text-red-400">{String(status)}</p>}
      </form>
    </section>
  )
}
