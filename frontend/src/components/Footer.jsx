import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-16 relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--jasu-blue)" }}
              >
                <GraduationCap size={16} color="#fff" strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--foreground)",
                }}
              >
                MediEnroll Consultancy
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                color: "var(--muted-foreground)",
                lineHeight: 1.7,
                maxWidth: "36ch",
              }}
            >
              Your trusted partner for MBBS admissions at Jalal-Abad State University, Kyrgyzstan. Transparent, expert, and student-first — always.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--jasu-teal)" }} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "var(--jasu-teal)",
                  fontWeight: 500,
                }}
              >
                Admissions Open 2025–26
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "var(--foreground)",
              }}
            >
              EXPLORE
            </h4>
            {["About MediEnroll", "MBBS Program", "Admission Process", "Fees & Scholarships", "Contact Us"].map((item) => (
              <div key={item} className="mb-2.5">
                <a
                  href="#"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "var(--jasu-blue)")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
                >
                  {item}
                </a>
              </div>
            ))}
          </div>

          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "var(--foreground)",
              }}
            >
              PORTALS
            </h4>
            {[
              { label: "Student Dashboard", to: "/dashboard/student" },
              { label: "Consultant Portal", to: "/dashboard/consultant" },
              { label: "Admin Panel", to: "/dashboard/admin" },
            ].map((item) => (
              <div key={item.label} className="mb-2.5">
                <Link
                  to={item.to}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "var(--jasu-blue)")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "var(--muted-foreground)",
            }}
          >
            © {year} MediEnroll Consultancy. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "var(--muted-foreground)",
            }}
          >
            Designed for aspiring doctors 🎓
          </p>
        </div>

        {/* Developer Contact Section */}
        <div
          className="mt-8 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="text-center">
            <h4
              className="mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "var(--foreground)",
              }}
            >
              CONTACT WEBSITE DEVELOPER
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:safikhan1618@gmail.com"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--muted-foreground)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--jasu-blue)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
              >
                safikhan1618@gmail.com
              </a>
              <span
                style={{
                  color: "var(--border)",
                  fontSize: "0.875rem",
                  display: "none",
                }}
                className="sm:inline"
              >
                •
              </span>
              <a
                href="https://wa.me/918452013641"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--muted-foreground)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--jasu-blue)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
              >
                +91 8452013641 (WhatsApp only)
              </a>
            </div>
            <p
              className="mt-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                color: "rgba(245,245,247,0.3)",
              }}
            >
              For server issues or technical support
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
