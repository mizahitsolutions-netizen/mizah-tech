import { STATS } from '../data/constants'

export default function Hero({ scrollTo }) {
  return (
    <section
      id="home"
      className="mesh-bg min-h-screen flex items-center pt-[80px] px-[5%] pb-20"
    >
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/30 rounded-full px-4 py-1.5 mb-6">
            <span className="shimmer w-2 h-2 rounded-full bg-brand-cyan inline-block"></span>
            <span className="text-[13px] text-brand-cyan font-semibold">
              IT Services & Digital Solutions • Dindigul
            </span>
          </div>

          <h1 className="font-display text-[clamp(36px,5vw,64px)] font-black leading-[1.1] mb-5">
            We Build Digital
            <br />
            <span className="gradient-text">Products That</span>
            <br />
            Close Deals.
          </h1>

          {/* Tagline */}
          <p className="text-xl text-slate-300 leading-relaxed mb-2 font-display font-semibold">
            Building Digital Solutions That{' '}
            <span className="text-brand-cyan">Grow Your Business.</span>
          </p>

          <p className="text-base text-slate-500 leading-[1.75] mb-9 max-w-[480px]">
            From startups to enterprises — Mizah Technologies crafts websites, apps, and
            AI-powered systems that turn visitors into paying clients.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="glow-btn pulse bg-gradient-to-br from-brand-blue to-brand-cyan text-white px-9 py-4 rounded-xl font-bold text-base border-none cursor-pointer font-sans"
            >
              Start Your Project →
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="bg-transparent border-2 border-brand-blue/40 text-slate-400 px-9 py-4 rounded-xl font-semibold text-base cursor-pointer font-sans hover:border-brand-blue/70 transition-colors"
            >
              View Services
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[32px] font-black text-white">{s.value}</div>
                <div className="text-[13px] text-slate-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — floating visual */}
        <div className="hidden md:flex justify-center">
          <div className="float relative w-[420px] h-[420px]">
            {/* Rings */}
            <div className="absolute inset-0 rounded-full border border-brand-blue/20" />
            <div className="absolute inset-[30px] rounded-full border border-brand-cyan/15" />

            {/* Center card */}
            <div className="absolute inset-[60px] rounded-3xl bg-gradient-to-br from-brand-blue/15 to-brand-cyan/8 border border-brand-blue/25 backdrop-blur-md flex flex-col items-center justify-center gap-4">
              <div className="text-5xl">🚀</div>
              <div className="font-display font-bold text-lg text-white text-center">Digital Solutions</div>
              <div className="text-[13px] text-slate-500 text-center px-5">Websites · Apps · AI · Design</div>
              <div className="bg-gradient-to-br from-brand-blue to-brand-cyan text-white rounded-lg px-5 py-2 text-[13px] font-bold">
                Let's Build →
              </div>
            </div>

            {/* Orbiting badges */}
            {[
              { icon: '🌐', label: 'Web Dev',  style: { top: '4%',  left: '35%' } },
              { icon: '🤖', label: 'AI',        style: { top: '40%', right: '-8%' } },
              { icon: '🛒', label: 'E-comm',    style: { bottom: '4%', left: '35%' } },
              { icon: '🎨', label: 'Design',    style: { top: '40%', left: '-8%' } },
            ].map((b) => (
              <div
                key={b.label}
                className="absolute bg-dark-900/90 border border-brand-blue/40 rounded-xl px-3.5 py-2 flex items-center gap-1.5 text-[13px] text-slate-200 font-semibold backdrop-blur-sm"
                style={b.style}
              >
                <span>{b.icon}</span>{b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
