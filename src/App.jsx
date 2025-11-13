import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Mail, Phone, Instagram, Dribbble, Behance, Linkedin } from 'lucide-react'

function Nav() {
  const items = [
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-white/30">
      <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="text-gray-900">YourName</span>
          <span className="text-blue-600">.design</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {items.map(i => (
            <a key={i.href} href={i.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">
              {i.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-full bg-blue-600 text-white text-sm font-semibold px-4 py-2 shadow hover:bg-blue-700 transition-colors">
            Let’s work
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100" aria-label="Toggle menu">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/95">
          <div className="px-4 py-4 flex flex-col gap-2">
            {items.map(i => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="py-2 text-gray-800">
                {i.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center rounded-full bg-blue-600 text-white text-sm font-semibold px-4 py-2 shadow w-max">
              Let’s work
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function ProjectCard({ title, tags, image }) {
  return (
    <div className="group relative rounded-xl border border-gray-200/60 bg-white/70 backdrop-blur p-4 transition hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm">Preview</div>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{tags.join(' · ')}</p>
        </div>
        <span className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100">
          <ArrowRight className="h-5 w-5" />
        </span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div id="home" className="scroll-smooth">
      <Nav />

      {/* Hero with Spline */}
      <section className="relative min-h-[90vh] pt-16 flex items-center">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Light gradient overlay for readability (won't block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Graphic & UI/UX Designer
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              I craft modern brand identities, interfaces, and visuals that feel effortless and memorable. From concept to pixel-perfect delivery.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center rounded-full bg-blue-600 text-white font-semibold px-5 py-2.5 shadow hover:bg-blue-700">
                View work
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white font-semibold px-5 py-2.5 hover:bg-gray-800">
                Contact me
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-gray-600">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 hover:text-gray-900"><Mail className="h-4 w-4"/> you@example.com</a>
              <span className="hidden sm:inline">•</span>
              <a href="tel:+123456789" className="inline-flex items-center gap-2 hover:text-gray-900"><Phone className="h-4 w-4"/> +1 234 567 89</a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="rounded-2xl border border-white/40 bg-white/50 backdrop-blur p-6 max-w-md">
              <p className="text-sm text-gray-600">Specialties</p>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-gray-900 font-medium">
                <li className="rounded-lg bg-white/80 px-3 py-2">Branding</li>
                <li className="rounded-lg bg-white/80 px-3 py-2">UI Design</li>
                <li className="rounded-lg bg-white/80 px-3 py-2">UX Research</li>
                <li className="rounded-lg bg-white/80 px-3 py-2">Design Systems</li>
                <li className="rounded-lg bg-white/80 px-3 py-2">Prototyping</li>
                <li className="rounded-lg bg-white/80 px-3 py-2">Illustration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative py-20 bg-gradient-to-b from-white to-blue-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Selected Work</h2>
              <p className="mt-2 text-gray-600 max-w-2xl">A glimpse of brand identities, product interfaces, and visual explorations.</p>
            </div>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline">Start a project <ArrowRight className="h-4 w-4"/></a>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard title="Fintech Dashboard" tags={["UI/UX", "Design System"]} image={"https://images.unsplash.com/photo-1551281044-8b98dbaccb78?q=80&w=1470&auto=format&fit=crop"} />
            <ProjectCard title="Brand Identity — Aurora" tags={["Branding", "Art Direction"]} image={"https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1470&auto=format&fit=crop"} />
            <ProjectCard title="E‑commerce App" tags={["Mobile", "Prototype"]} image={"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1470&auto=format&fit=crop"} />
            <ProjectCard title="SaaS Marketing" tags={["Web", "Illustration"]} image={"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1470&auto=format&fit=crop"} />
            <ProjectCard title="Health App" tags={["UX", "UI"]} image={"https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1470&auto=format&fit=crop"} />
            <ProjectCard title="Social Concept" tags={["Concept", "Visual"]} image={"https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop"} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Services</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Brand Identity', desc: 'Logos, palette, typography, guidelines that scale.' },
              { title: 'Product Design', desc: 'Research, flows, wireframes, high‑fidelity UI & prototypes.' },
              { title: 'Design Systems', desc: 'Components, tokens, accessibility and documentation.' },
            ].map(s => (
              <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I’m a multidisciplinary designer with a focus on crafting intuitive and aesthetic digital experiences. Over the past years I’ve partnered with startups and brands to deliver identities and products that users love.
            </p>
            <div className="mt-6 flex items-center gap-4 text-gray-700">
              <a href="#contact" className="inline-flex items-center rounded-full bg-blue-600 text-white font-semibold px-5 py-2.5 shadow hover:bg-blue-700">Book a call</a>
              <a href="/" className="text-blue-700 font-semibold hover:underline">Download CV</a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 border border-white/60 shadow-inner" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let’s create something great</h2>
              <p className="mt-3 text-gray-700">Tell me about your project and timeline. I’ll reply within 24 hours.</p>
              <div className="mt-6 flex items-center gap-4 text-gray-700">
                <a className="inline-flex items-center gap-2 hover:text-gray-900" href="mailto:you@example.com"><Mail className="h-5 w-5"/> you@example.com</a>
                <a className="inline-flex items-center gap-2 hover:text-gray-900" href="tel:+123456789"><Phone className="h-5 w-5"/> +1 234 567 89</a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-gray-600">
                <a href="#" className="hover:text-gray-900" aria-label="Instagram"><Instagram className="h-5 w-5"/></a>
                <a href="#" className="hover:text-gray-900" aria-label="Dribbble"><Dribbble className="h-5 w-5"/></a>
                <a href="#" className="hover:text-gray-900" aria-label="Behance"><Behance className="h-5 w-5"/></a>
                <a href="#" className="hover:text-gray-900" aria-label="LinkedIn"><Linkedin className="h-5 w-5"/></a>
              </div>
            </div>
            <form className="bg-white rounded-2xl border border-gray-200 p-6 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input type="text" placeholder="Your name" className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" placeholder="your@email.com" className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Project details</label>
                <textarea rows="4" placeholder="Tell me about your goals, scope, and timeline" className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="inline-flex justify-center items-center rounded-full bg-blue-600 text-white font-semibold px-5 py-2.5 hover:bg-blue-700">Send inquiry</button>
              <p className="text-xs text-gray-500">By sending, you agree to be contacted about your project.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} YourName. All rights reserved.</p>
          <a href="#home" className="text-sm font-medium text-blue-700 hover:underline">Back to top</a>
        </div>
      </footer>
    </div>
  )
}
