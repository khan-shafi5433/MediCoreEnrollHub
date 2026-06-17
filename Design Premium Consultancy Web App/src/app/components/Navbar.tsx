import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router";

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Why JASU", href: "/#why-jasu" },
  { label: "Admission", href: "/#admission" },
  { label: "Testimonials", href: "/#trust" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.includes("#")) {
      const id = href.split("#")[1];
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? isDark
              ? "rgba(5, 5, 7, 0.85)"
              : "rgba(255, 255, 255, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
          borderBottom: scrolled
            ? `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--jasu-blue)" }}
              >
                <GraduationCap size={16} color="#fff" strokeWidth={2.5} />
              </div>
              <span
                className="tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: isDark ? "#f5f5f7" : "#1d1d1f",
                }}
              >
                JASU
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "var(--jasu-blue)",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                CONSULTANCY
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {!isDashboard &&
                navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-2 rounded-full text-sm transition-all duration-200 hover:bg-white/10"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      color: isDark ? "rgba(245,245,247,0.8)" : "rgba(29,29,31,0.8)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={onThemeToggle}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                }}
              >
                {isDark ? (
                  <Sun size={15} color="#f5f5f7" />
                ) : (
                  <Moon size={15} color="#1d1d1f" />
                )}
              </button>

              <Link
                to="/dashboard/student"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{
                  background: "var(--jasu-blue)",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                }}
              >
                Student Portal
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}
              >
                {menuOpen ? (
                  <X size={16} color={isDark ? "#f5f5f7" : "#1d1d1f"} />
                ) : (
                  <Menu size={16} color={isDark ? "#f5f5f7" : "#1d1d1f"} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl overflow-hidden"
            style={{
              background: isDark ? "rgba(28,28,30,0.96)" : "rgba(255,255,255,0.96)",
              backdropFilter: "blur(20px)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 rounded-xl text-sm transition-all duration-200"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: isDark ? "#f5f5f7" : "#1d1d1f",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px my-2" style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }} />
              <Link
                to="/dashboard/student"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm text-center transition-all duration-200"
                style={{ background: "var(--jasu-blue)", color: "#fff", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                Student Portal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
