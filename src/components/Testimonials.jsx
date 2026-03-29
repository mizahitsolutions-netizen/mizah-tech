import FadeIn from './FadeIn'
import { TESTIMONIALS } from '../data/constants'

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-[5%] py-24">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block bg-brand-blue/10 border border-brand-blue/25 rounded-md px-3.5 py-1 text-xs font-bold text-brand-cyan tracking-[2px] mb-4">
              TESTIMONIALS
            </div>
            <h2 className="font-display text-[clamp(28px,4vw,46px)] font-black text-white">
              Clients Who{' '}
              <span className="gradient-text">Closed the Deal</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.12}>
              <div
                className="card-hover rounded-2xl p-8 border border-white/[0.06] h-full"
                style={{
                  background:
                    'linear-gradient(135deg,rgba(255,255,255,0.04) 0%,rgba(26,108,246,0.06) 100%)',
                }}
              >
                <div className="flex gap-1 mb-5">
                  {Array(t.rating)
                    .fill(0)
                    .map((_, j) => (
                      <span key={j} className="text-amber-400 text-lg">★</span>
                    ))}
                </div>
                <p className="text-[15px] text-slate-400 leading-[1.8] mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center font-display font-bold text-lg text-white flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white text-[15px]">{t.name}</div>
                    <div className="text-[13px] text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
