// CookieBanner.jsx
import { useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-black/80 border border-white/10 p-4 rounded-xl text-sm text-slate-300 flex flex-col md:flex-row justify-between items-center gap-3 z-50">
      <p>
        We use cookies to improve your experience. By using our site, you agree.
      </p>
      <button
        onClick={() => setShow(false)}
        className="bg-blue-600 px-4 py-2 rounded-lg text-white"
      >
        Accept
      </button>
    </div>
  );
}
