import { Link } from "react-router-dom";

export default function Footer({ scrollTo }) {
  return (
    <footer className="border-t border-white/10 bg-black/40 px-[5%] py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* 🔷 Brand */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Mizah Technologies"
              className="w-10 h-10 object-contain"
            />
            <div className="font-display font-bold text-white text-lg">
              Mizah Technologies
            </div>
          </div>

          <p className="text-xs text-slate-400 max-w-xs">
            Building Digital Solutions That Grow Your Business
          </p>

          <p className="text-xs text-slate-500">
            Trusted by businesses across India
          </p>
        </div>

        {/* 🚀 CTA */}
        <div className="text-center">
          <p className="text-sm text-slate-400 mb-2">Have a project in mind?</p>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-lg text-sm font-semibold text-white hover:scale-105 transition"
          >
            Get Free Quote →
          </button>
        </div>

        {/* 📜 Copyright + Links */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <div className="flex gap-4 text-xs text-slate-500">
            <Link
              to="/privacy-policy"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-blue-400 transition"
            >
              Terms & Conditions
            </Link>
          </div>

          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Mizah Technologies
          </div>

          <div className="text-xs text-slate-600">
            Made with ❤️ in Tamil Nadu
          </div>
        </div>
      </div>
    </footer>
  );
}
