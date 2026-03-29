import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import WhatsAppButton from "../components/WhatsAppButton";

export default function MainLayout({ children }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-dark-900 text-slate-200 min-h-screen font-sans">
      <Navbar scrollTo={scrollTo} />

      {/* Page Content */}
      {children}

      <Footer scrollTo={scrollTo} />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
