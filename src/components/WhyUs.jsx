import FadeIn from './FadeIn'
import { WHY_US } from '../data/constants'

export default function WhyUs() {
  return (
    <section className="px-[5%] py-20 bg-brand-blue/[0.04] border-y border-brand-blue/10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {WHY_US.map((w, i) => (
          <FadeIn key={w.title} delay={i * 0.1}>
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">{w.icon}</div>
              <div>
                <div className="font-display font-bold text-base text-white mb-1.5">{w.title}</div>
                <div className="text-sm text-slate-500 leading-relaxed">{w.desc}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
