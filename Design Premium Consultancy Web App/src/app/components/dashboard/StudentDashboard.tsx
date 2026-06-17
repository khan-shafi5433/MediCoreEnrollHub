import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard, FileText, MessageCircle, CreditCard,
  Bell, Settings, LogOut, ChevronRight, CheckCircle2,
  Clock, AlertCircle, User, GraduationCap, TrendingUp, Download
} from "lucide-react";
import { Link } from "react-router";
import { ChatUI } from "../chat/ChatUI";

const applicationSteps = [
  { label: "Registration", status: "done", date: "12 Jun 2025" },
  { label: "Counselling Session", status: "done", date: "14 Jun 2025" },
  { label: "Documentation", status: "active", date: "In Progress" },
  { label: "Application Submitted", status: "pending", date: "Pending" },
  { label: "Admission Letter", status: "pending", date: "Pending" },
  { label: "Visa Processing", status: "pending", date: "Pending" },
];

const documents = [
  { name: "NEET Scorecard 2025", status: "approved", size: "420 KB" },
  { name: "10th Mark Sheet", status: "approved", size: "1.2 MB" },
  { name: "12th Mark Sheet", status: "review", size: "1.8 MB" },
  { name: "Passport Copy", status: "pending", size: "—" },
  { name: "Passport Photos (×6)", status: "pending", size: "—" },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: FileText, label: "Documents", id: "documents" },
  { icon: MessageCircle, label: "Chat", id: "chat" },
  { icon: CreditCard, label: "Payments", id: "payments" },
  { icon: Settings, label: "Settings", id: "settings" },
];

const statusColor = {
  done: "#30d158",
  active: "#0071e3",
  pending: "var(--muted-foreground)",
};

const statusBg = {
  done: "rgba(48,209,88,0.1)",
  active: "rgba(0,113,227,0.1)",
  pending: "var(--muted)",
};

export function StudentDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div
      className="min-h-screen flex"
      style={{ paddingTop: "4rem", background: "var(--background)" }}
    >
      {/* Sidebar */}
      <motion.aside
        animate={{ width: sidebarCollapsed ? 70 : 240 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed left-0 top-16 bottom-0 z-30 flex flex-col overflow-hidden"
        style={{
          background: "var(--sidebar)",
          borderRight: "1px solid var(--sidebar-border)",
        }}
      >
        {/* Profile */}
        <div
          className="p-4 flex items-center gap-3 overflow-hidden"
          style={{ borderBottom: "1px solid var(--sidebar-border)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format"
            alt="Student"
            className="w-9 h-9 rounded-full object-cover flex-shrink-0"
          />
          <AnimatePresence>
            {!sidebarCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--sidebar-foreground)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Arjun Mehta
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    color: "var(--jasu-blue)",
                    whiteSpace: "nowrap",
                  }}
                >
                  JASU Applicant 2025
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 flex flex-col gap-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 w-full text-left"
              style={{
                background:
                  activeSection === item.id
                    ? "var(--sidebar-accent)"
                    : "transparent",
                color:
                  activeSection === item.id
                    ? "var(--sidebar-primary)"
                    : "var(--sidebar-foreground)",
              }}
            >
              <item.icon
                size={18}
                strokeWidth={1.5}
                color={
                  activeSection === item.id
                    ? "var(--sidebar-primary)"
                    : "var(--muted-foreground)"
                }
              />
              <AnimatePresence>
                {!sidebarCollapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: activeSection === item.id ? 500 : 400,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          ))}
        </nav>

        {/* Collapse & Logout */}
        <div className="p-3 flex flex-col gap-1" style={{ borderTop: "1px solid var(--sidebar-border)" }}>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 hover:bg-sidebar-accent w-full"
          >
            <motion.div animate={{ rotate: sidebarCollapsed ? 0 : 180 }}>
              <ChevronRight size={16} color="var(--muted-foreground)" />
            </motion.div>
            <AnimatePresence>
              {!sidebarCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: "var(--muted-foreground)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Collapse
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 hover:bg-red-500/10 w-full"
          >
            <LogOut size={16} color="#ff453a" />
            <AnimatePresence>
              {!sidebarCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: "#ff453a",
                    whiteSpace: "nowrap",
                  }}
                >
                  Log Out
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>
      </motion.aside>

      {/* Main content */}
      <main
        className="flex-1 overflow-auto"
        style={{ marginLeft: sidebarCollapsed ? 70 : 240, transition: "margin 0.3s ease" }}
      >
        <div className="max-w-5xl mx-auto p-8">
          {activeSection === "dashboard" && <DashboardOverview />}
          {activeSection === "documents" && <DocumentsView />}
          {activeSection === "chat" && (
            <div style={{ height: "calc(100vh - 8rem)" }}>
              <ChatUI />
            </div>
          )}
          {activeSection === "payments" && <PaymentsView />}
          {activeSection === "settings" && (
            <div className="flex items-center justify-center h-64">
              <p style={{ color: "var(--muted-foreground)", fontFamily: "'Inter', sans-serif" }}>Settings coming soon</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function DashboardOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="mb-8">
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "var(--foreground)",
          }}
        >
          Good morning, Arjun 👋
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            color: "var(--muted-foreground)",
            marginTop: "0.25rem",
          }}
        >
          Your MBBS admission journey is 42% complete. Keep going!
        </p>
      </div>

      {/* Progress Card */}
      <div
        className="p-6 rounded-3xl mb-6"
        style={{
          background: "linear-gradient(135deg, #0071e3 0%, #004aad 100%)",
          boxShadow: "0 8px 32px rgba(0,113,227,0.3)",
        }}
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "0.5rem",
              }}
            >
              APPLICATION PROGRESS
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1,
              }}
            >
              42%
            </div>
          </div>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
            <GraduationCap size={28} color="#fff" strokeWidth={1.5} />
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.2)" }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "42%" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{ background: "#fff" }}
          />
        </div>

        <div className="flex items-center justify-between mt-3">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>
            Step 3 of 6 — Documentation
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>
            Est. completion: Jul 2025
          </span>
        </div>
      </div>

      {/* Steps */}
      <div className="p-6 rounded-3xl mb-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <h3
          className="mb-5"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "var(--foreground)" }}
        >
          Admission Steps
        </h3>
        <div className="flex flex-col gap-3">
          {applicationSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: statusBg[step.status as keyof typeof statusBg] }}
              >
                {step.status === "done" && <CheckCircle2 size={16} color={statusColor.done} />}
                {step.status === "active" && <Clock size={16} color={statusColor.active} />}
                {step.status === "pending" && (
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "var(--muted-foreground)", fontWeight: 600 }}>
                    {i + 1}
                  </span>
                )}
              </div>
              <div className="flex-1 flex items-center justify-between">
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: step.status === "active" ? 600 : 400,
                    color: step.status === "pending" ? "var(--muted-foreground)" : "var(--foreground)",
                  }}
                >
                  {step.label}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: step.status === "active" ? "var(--jasu-blue)" : "var(--muted-foreground)",
                  }}
                >
                  {step.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Documents Uploaded", value: "3/5", icon: FileText, color: "#0071e3" },
          { label: "Counselor Sessions", value: "2", icon: MessageCircle, color: "#00bfa5" },
          { label: "Days Until Deadline", value: "18", icon: Clock, color: "#f59e0b" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-5 rounded-2xl"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${stat.color}15` }}>
              <stat.icon size={18} color={stat.color} strokeWidth={1.5} />
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--foreground)", lineHeight: 1 }}>
              {stat.value}
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "var(--muted-foreground)", marginTop: "0.25rem" }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function DocumentsView() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-8">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--foreground)" }}>
          Documents
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "var(--muted-foreground)", marginTop: "0.25rem" }}>
          Upload and track your admission documents
        </p>
      </div>

      <div className="p-6 rounded-3xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <div className="flex flex-col gap-3">
          {documents.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-2xl"
              style={{ background: "var(--muted)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <FileText size={18} color="var(--jasu-blue)" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)" }}>
                  {doc.name}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "var(--muted-foreground)" }}>
                  {doc.size}
                </div>
              </div>
              <div
                className="px-3 py-1 rounded-full"
                style={{
                  background:
                    doc.status === "approved" ? "rgba(48,209,88,0.1)" :
                    doc.status === "review" ? "rgba(0,113,227,0.1)" :
                    "var(--muted)",
                  color:
                    doc.status === "approved" ? "#30d158" :
                    doc.status === "review" ? "var(--jasu-blue)" :
                    "var(--muted-foreground)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  textTransform: "capitalize",
                }}
              >
                {doc.status}
              </div>
              {doc.status !== "pending" && (
                <button className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                  <Download size={13} color="var(--muted-foreground)" />
                </button>
              )}
              {doc.status === "pending" && (
                <button
                  className="px-3 py-1.5 rounded-xl transition-all hover:opacity-90"
                  style={{ background: "var(--jasu-blue)", color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500 }}
                >
                  Upload
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PaymentsView() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-8">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--foreground)" }}>
          Payment Status
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Consultancy Fee", amount: "₹15,000", status: "Paid", date: "12 Jun 2025", color: "#30d158" },
          { label: "JASU Registration Fee", amount: "₹8,000", status: "Paid", date: "15 Jun 2025", color: "#30d158" },
          { label: "Year 1 Tuition", amount: "₹2,10,000", status: "Due", date: "Due: 30 Jul 2025", color: "#f59e0b" },
          { label: "Hostel (Year 1)", amount: "₹85,000", status: "Pending", date: "After admission", color: "var(--muted-foreground)" },
        ].map((payment, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-3xl"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "var(--muted-foreground)" }}>{payment.label}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--foreground)", marginTop: "0.25rem" }}>{payment.amount}</div>
              </div>
              <div className="px-3 py-1 rounded-full" style={{ background: `${payment.color}15`, color: payment.color, fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600 }}>
                {payment.status}
              </div>
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{payment.date}</div>
            {payment.status === "Due" && (
              <button className="mt-4 w-full py-2.5 rounded-xl transition-all hover:opacity-90" style={{ background: "var(--jasu-blue)", color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500 }}>
                Pay Now
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
