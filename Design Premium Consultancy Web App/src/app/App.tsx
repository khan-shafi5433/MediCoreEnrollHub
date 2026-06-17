/* MARKER-MAKE-KIT-INVOKED */
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/home/HomePage";
import { StudentDashboard } from "./components/dashboard/StudentDashboard";
import { ConsultantDashboard } from "./components/dashboard/ConsultantDashboard";
import { AdminDashboard } from "./components/dashboard/AdminDashboard";

function AppContent() {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {!isDashboard && (
        <Navbar isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />
      )}

      {isDashboard && (
        <div
          className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6"
          style={{
            background: isDark ? "rgba(5,5,7,0.9)" : "rgba(255,255,255,0.9)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="flex items-center gap-4 flex-1">
            <a
              href="/"
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, "", "/");
                window.dispatchEvent(new PopStateEvent("popstate"));
              }}
            >
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "var(--jasu-blue)" }}>
                <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700 }}>J</span>
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem", color: "var(--foreground)" }}>
                JASU Consultancy
              </span>
            </a>

            <span style={{ color: "var(--border)", fontSize: "1.2rem" }}>/</span>

            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "var(--muted-foreground)" }}>
              {location.pathname === "/dashboard/student" && "Student Portal"}
              {location.pathname === "/dashboard/consultant" && "Consultant Portal"}
              {location.pathname === "/dashboard/admin" && "Admin Panel"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <DashboardLinks currentPath={location.pathname} />
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "var(--muted)" }}
            >
              <span style={{ fontSize: "0.85rem" }}>{isDark ? "☀️" : "🌙"}</span>
            </button>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/consultant" element={<ConsultantDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
      </Routes>

      {/* Global styles */}
      <style>{`
        * { scrollbar-width: none; }
        *::-webkit-scrollbar { display: none; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

function DashboardLinks({ currentPath }: { currentPath: string }) {
  const links = [
    { label: "Student", path: "/dashboard/student" },
    { label: "Consultant", path: "/dashboard/consultant" },
    { label: "Admin", path: "/dashboard/admin" },
  ];

  return (
    <div className="flex items-center gap-1">
      {links.map((link) => (
        <a
          key={link.path}
          href={link.path}
          className="px-3 py-1.5 rounded-lg text-sm transition-all"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.78rem",
            fontWeight: currentPath === link.path ? 600 : 400,
            background: currentPath === link.path ? "var(--jasu-blue)" : "transparent",
            color: currentPath === link.path ? "#fff" : "var(--muted-foreground)",
            textDecoration: "none",
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
