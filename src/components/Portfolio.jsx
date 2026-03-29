import { useState } from "react";
import FadeIn from "./FadeIn";
import CaseStudyModal from "../components/CaseStudyModal";
import { PORTFOLIO } from "../data/constants";

export default function Portfolio({ scrollTo }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="px-[5%] py-20 md:py-24 bg-white/[0.01]">
      <div className="max-w-[1200px] mx-auto">
        {/* 🔥 Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-500/10 border border-blue-500/30 text-cyan-400 px-3 py-1 text-xs rounded-md font-bold mb-4">
              OUR WORK
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Real Projects. <span className="gradient-text">Real Impact.</span>
            </h2>

            <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-base">
              We build high-performing digital products that deliver real
              business results.
            </p>
          </div>
        </FadeIn>

        {/* 🔥 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.15}>
              <div
                onClick={() => setSelectedProject(p)}
                className="group cursor-pointer relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:scale-[1.02] transition duration-300"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition blur-2xl"
                  style={{ background: p.colorBg }}
                />

                {/* Browser Bar */}
                <div className="flex items-center gap-2 px-4 py-2 bg-black/40 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>

                  <div className="flex-1 text-xs text-slate-400 bg-white/5 px-2 py-1 rounded truncate">
                    🔒 {p.domain}
                  </div>

                  <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-1 rounded">
                    LIVE
                  </span>
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <span className="bg-white text-black text-xs md:text-sm px-4 py-2 rounded-lg font-semibold">
                      View Case Study →
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: p.colorBg }}
                    >
                      {p.icon}
                    </div>

                    <div>
                      <h3 className="text-white font-bold text-base md:text-lg">
                        {p.name}
                      </h3>
                      <p className="text-xs text-slate-500">{p.category}</p>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-400 mb-4">
                    {p.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] md:text-xs px-2 py-1 bg-white/5 border border-white/10 rounded"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 🔥 CTA */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-slate-500 mb-4 text-sm">
              Want results like these?
            </p>

            <button
              onClick={() => scrollTo("contact")}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Start Your Project →
            </button>
          </div>
        </FadeIn>
      </div>

      {/* 🔥 Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
