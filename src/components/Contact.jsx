import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase"; // ✅ use exported one
import { db } from "../firebase";
import toast from "react-hot-toast";
import FadeIn from "./FadeIn";
import { SERVICES, CONTACT_INFO } from "../data/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const sendEmail = httpsCallable(functions, "sendEmail");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      // ✅ 1. Save to Firebase
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      toast.success("Message sent successfully! 🚀");
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };
  const inputClass =
    "w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition";
  return (
    <section
      id="contact"
      className="px-[5%] py-20 pb-24 border-t border-brand-blue/10"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* LEFT */}
        <FadeIn>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Let’s Start Your <span className="gradient-text">Project</span>
            </h2>

            <p className="text-slate-400 mb-8">
              Fill the form and we’ll get back within 24 hours.
            </p>

            <div className="flex flex-col gap-6">
              {CONTACT_INFO.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center rounded-xl">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{c.label}</div>
                    <div className="text-sm text-white">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* RIGHT FORM */}
        <FadeIn delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
          >
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={inputClass}
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={inputClass}
            />

            {/* Service */}
            <select
              required
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className={`${inputClass} bg-dark-800 `}
            >
              <option value="">Select Service</option>
              {SERVICES.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>

            {/* Message */}
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`${inputClass} resize-none`}
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition 
              ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105"
              }`}
            >
              {loading ? (
                <>
                  {/* Spinner */}
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message →"
              )}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
