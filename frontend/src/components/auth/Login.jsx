import { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, GraduationCap, Briefcase, Shield, ArrowRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, role);
  };

  const roles = [
    { id: "student", label: "Student", icon: GraduationCap, color: "#0071e3" },
    { id: "consultant", label: "Consultant", icon: Briefcase, color: "#00bfa5" },
    { id: "admin", label: "Admin", icon: Shield, color: "#ff453a" },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "var(--background)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "var(--jasu-blue)" }}
            >
              <span style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 700 }}>J</span>
            </div>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "var(--foreground)",
              }}
            >
              MediEnroll Consultancy
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "var(--muted-foreground)",
            }}
          >
            Sign in to access your dashboard
          </p>
        </div>

        {/* Login Card */}
        <div
          className="p-8 rounded-3xl"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          {/* Role Selection */}
          <div className="mb-6">
            <label
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--muted-foreground)",
                marginBottom: "0.5rem",
                display: "block",
              }}
            >
              Select your role
            </label>
            <div className="grid grid-cols-3 gap-3">
              {roles.map((r) => {
                const Icon = r.icon;
                return (
                  <button
                    key={r.id}
                    onClick={() => setRole(r.id)}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all"
                    style={{
                      background: role === r.id ? `${r.color}15` : "var(--muted)",
                      border: role === r.id ? `1px solid ${r.color}30` : "1px solid transparent",
                    }}
                  >
                    <Icon size={20} color={role === r.id ? r.color : "var(--muted-foreground)"} />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        color: role === r.id ? r.color : "var(--muted-foreground)",
                      }}
                    >
                      {r.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--muted-foreground)",
                  marginBottom: "0.5rem",
                  display: "block",
                }}
              >
                Email Address
              </label>
              <div className="relative">
                <User
                  size={18}
                  color="var(--muted-foreground)"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl"
                  style={{
                    background: "var(--muted)",
                    border: "1px solid var(--border)",
                    color: "var(--foreground)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--muted-foreground)",
                  marginBottom: "0.5rem",
                  display: "block",
                }}
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  color="var(--muted-foreground)"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl"
                  style={{
                    background: "var(--muted)",
                    border: "1px solid var(--border)",
                    color: "var(--foreground)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl transition-all hover:opacity-90"
              style={{
                background: "var(--jasu-blue)",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              Sign In
              <ArrowRight size={16} />
            </button>
          </form>

          <p
            className="text-center mt-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              color: "var(--muted-foreground)",
            }}
          >
            Note: Firebase authentication will be integrated soon. For now, enter any credentials to access the dashboard.
          </p>
        </div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <a
            href="/"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "var(--jasu-blue)",
              textDecoration: "none",
            }}
          >
            ← Back to Home
          </a>
        </div>
      </motion.div>
    </div>
  );
}
