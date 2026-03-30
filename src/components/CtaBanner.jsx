import FadeIn from './FadeIn'

export default function CtaBanner({ scrollTo }) {
  return (
    <section className="px-[5%] pb-20">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div
            className="rounded-3xl px-12 py-16 text-center relative overflow-hidden border border-brand-blue/30"
            style={{
              background:
                'linear-gradient(135deg,rgba(26,108,246,0.2) 0%,rgba(56,178,248,0.1) 100%)',
            }}
          >
            {/* Glow blobs */}
            <div
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-[0.08]"
              style={{ background: '#1a6cf6', filter: 'blur(60px)' }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full opacity-[0.08]"
              style={{ background: '#38b2f8', filter: 'blur(40px)' }}
            />

            <h2 className="font-display text-[clamp(26px,4vw,48px)] font-black text-white mb-4 relative">
              Ready to Build Something{' '}
              <span className="gradient-text">Remarkable?</span>
            </h2>
            <p className="text-[17px] text-slate-500 mb-9 relative">
              Get a free consultation and project quote within 24 hours.
            </p>
            <div className="flex gap-4 justify-center flex-wrap relative">
              <button
                onClick={() => scrollTo('contact')}
                className="glow-btn bg-gradient-to-br from-brand-blue to-brand-cyan text-white px-10 py-4 rounded-xl font-bold text-base border-none cursor-pointer font-sans"
              >
                Get Free Quote →
              </button>
              <a
                href="tel:+919677471102"
                className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/12 text-slate-400 px-10 py-4 rounded-xl font-semibold text-base no-underline font-sans hover:bg-white/10 transition-colors"
              >
                📞 Call Us Now
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
