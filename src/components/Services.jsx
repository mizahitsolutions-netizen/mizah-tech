import { useState } from 'react'
import FadeIn from './FadeIn'
import { SERVICES } from '../data/constants'

export default function Services({ scrollTo }) {
  const [active, setActive] = useState(null)

  return (
    <section id="services" className="px-[5%] py-24">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block bg-brand-blue/10 border border-brand-blue/25 rounded-md px-3.5 py-1 text-xs font-bold text-brand-cyan tracking-[2px] mb-4">
              OUR SERVICES
            </div>
            <h2 className="font-display text-[clamp(28px,4vw,48px)] font-black text-white mb-4">
              Everything You Need to{' '}
              <span className="gradient-text">Dominate Online</span>
            </h2>
            <p className="text-[17px] text-slate-500 max-w-[520px] mx-auto leading-relaxed">
              End-to-end digital solutions crafted to generate real business results — not just pretty pages.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.07}>
              <div
                className="card-hover rounded-2xl p-7 h-full cursor-default border transition-all duration-300"
                style={{
                  background:
                    active === i
                      ? 'linear-gradient(135deg,rgba(26,108,246,0.18),rgba(56,178,248,0.08))'
                      : 'rgba(255,255,255,0.03)',
                  borderColor: active === i ? 'rgba(26,108,246,0.5)' : 'rgba(255,255,255,0.07)',
                }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <div className="font-display font-bold text-lg text-white mb-2.5">{s.title}</div>
                <p className="text-[14px] text-slate-500 leading-relaxed mb-4">{s.desc}</p>
                <div className="inline-block bg-brand-blue/15 text-brand-cyan px-3 py-1 rounded-md text-xs font-bold">
                  {s.highlight}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
