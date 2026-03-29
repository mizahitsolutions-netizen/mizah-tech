import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <>
      {/* 🔥 Toaster */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0a0e1a",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      />

      {/* 🌐 Router */}
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}