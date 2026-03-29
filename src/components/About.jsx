import FadeIn from './FadeIn'
import { STATS } from '../data/constants'

const FEATURES = [
  'Transparent pricing with no hidden costs',
  'Direct communication with your development team',
  'Post-launch support & performance monitoring',
  'Proven track record across 8+ industries',
]

export default function About() {
  return (
    <section
      id="about"
      className="px-[5%] py-24 bg-gradient-to-b from-brand-blue/5 to-transparent"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Stats card */}
        <FadeIn>
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-blue/12 to-brand-cyan/6 border border-brand-blue/20 rounded-3xl p-12">
              <div className="font-display text-7xl font-black text-brand-blue leading-none">5+</div>
              <div className="text-base text-slate-400 mt-2 mb-8">Years of Building Digital Excellence</div>
              <div className="grid grid-cols-2 gap-5">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="bg-gradient-to-br from-brand-blue/12 to-brand-cyan/6 rounded-xl p-5 text-center"
                  >
                    <div className="font-display text-3xl font-black text-white">{s.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-15"
              style={{ background: 'linear-gradient(135deg,#1a6cf6,#38b2f8)', filter: 'blur(20px)' }}
            />
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={0.2}>
          <div>
            <div className="inline-block bg-brand-blue/10 border border-brand-blue/25 rounded-md px-3.5 py-1 text-xs font-bold text-brand-cyan tracking-[2px] mb-5">
              ABOUT US
            </div>
            <h2 className="font-display text-[clamp(26px,3.5vw,42px)] font-black text-white leading-[1.2] mb-5">
              Your Technology Partner
              <br />
              <span className="gradient-text">in Dindigul & Beyond</span>
            </h2>
            <p className="text-base text-slate-500 leading-[1.8] mb-5">
              At Mizah Technologies, we believe that every business deserves world-class digital
              infrastructure. We're a passionate team of developers, designers, and strategists
              who turn ideas into high-performing digital products.
            </p>
            <p className="text-base text-slate-500 leading-[1.8] mb-8">
              Based in Dindigul, we serve clients across India and globally. Our approach is
              simple: understand your business, build what works, and stand by you for the long
              haul.
            </p>
            <div className="flex flex-col gap-3">
              {FEATURES.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-[11px] text-white flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-[15px] text-slate-400">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
