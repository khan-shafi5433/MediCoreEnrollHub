import { useState } from "react";
import { motion } from "motion/react";
import {
  Users, MessageCircle, Clock, CheckCircle2, Search,
  ChevronRight, LogOut
} from "lucide-react";
import { Link } from "react-router";
import { ChatUI } from "../chat/ChatUI";

const enquiries = [
  { name: "Priya Sharma", from: "Mumbai", score: 485, status: "hot", time: "5 min ago" },
  { name: "Rohan Kumar", from: "Delhi", score: 420, status: "warm", time: "1 hr ago" },
  { name: "Sneha Patel", from: "Ahmedabad", score: 395, status: "new", time: "3 hr ago" },
  { name: "Vikram Singh", from: "Jaipur", score: 450, status: "warm", time: "5 hr ago" },
  { name: "Ananya Rao", from: "Bangalore", score: 510, status: "hot", time: "Yesterday" },
];

const statusColors = {
  hot: { color: "#ff453a", bg: "rgba(255,69,58,0.1)", label: "HOT" },
  warm: { color: "#f59e0b", bg: "rgba(245,158,11,0.1)", label: "WARM" },
  new: { color: "#30d158", bg: "rgba(48,209,88,0.1)", label: "NEW" },
};

export function ConsultantDashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex" style={{ paddingTop: "4rem", background: "var(--background)" }}>
      {/* Sidebar */}
      <aside
        className="fixed left-0 top-16 bottom-0 z-30 w-60 flex flex-col"
        style={{ background: "var(--sidebar)", borderRight: "1px solid var(--sidebar-border)" }}
      >
        <div className="p-4 flex items-center gap-3" style={{ borderBottom: "1px solid var(--sidebar-border)" }}>
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format"
            alt="Consultant"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "var(--sidebar-foreground)" }}>Rahul Sharma</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "var(--jasu-teal)" }}>Senior Counselor</div>
          </div>
        </div>

        <nav className="flex-1 p-3 flex flex-col gap-1">
          {[
            { icon: LayoutDashboard2, label: "Overview", id: "overview" },
            { icon: Users, label: "My Students", id: "students" },
            { icon: MessageCircle, label: "Chats", id: "chat" },
            { icon: Clock, label: "Schedule", id: "schedule" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all w-full text-left"
              style={{
                background: activeSection === item.id ? "var(--sidebar-accent)" : "transparent",
                color: activeSection === item.id ? "var(--sidebar-primary)" : "var(--sidebar-foreground)",
              }}
            >
              <item.icon
                size={18}
                color={activeSection === item.id ? "var(--sidebar-primary)" : "var(--muted-foreground)"}
              />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: activeSection === item.id ? 500 : 400 }}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="p-3" style={{ borderTop: "1px solid var(--sidebar-border)" }}>
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-500/10 transition-all">
            <LogOut size={16} color="#ff453a" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#ff453a" }}>Log Out</span>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto" style={{ marginLeft: 240 }}>
        <div className="max-w-5xl mx-auto p-8">
          {activeSection === "overview" && <ConsultantOverview />}
          {activeSection === "students" && <StudentsView />}
          {activeSection === "chat" && (
            <div style={{ height: "calc(100vh - 8rem)" }}>
              <ChatUI consultantName="Arjun Mehta (Student)" consultantRole="MBBS Applicant 2025" />
            </div>
          )}
          {activeSection === "schedule" && (
            <div className="flex items-center justify-center h-64">
              <p style={{ color: "var(--muted-foreground)", fontFamily: "'Inter', sans-serif" }}>Schedule view coming soon</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function LayoutDashboard2({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function ConsultantOverview() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-8">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--foreground)" }}>
          Consultant Dashboard
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "var(--muted-foreground)", marginTop: "0.25rem" }}>
          Tuesday, 17 June 2025 · 4 new enquiries today
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Active Students", value: "28", icon: Users, color: "#0071e3" },
          { label: "Pending Enquiries", value: "12", icon: MessageCircle, color: "#f59e0b" },
          { label: "Admissions Closed", value: "47", icon: CheckCircle2, color: "#30d158" },
          { label: "Avg Response Time", value: "18m", icon: Clock, color: "#af52de" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
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

      {/* Recent Enquiries */}
      <div className="p-6 rounded-3xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <div className="flex items-center justify-between mb-5">
          <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "var(--foreground)" }}>
            Recent Enquiries
          </h3>
          <button style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "var(--jasu-blue)" }}>
            View all
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {enquiries.map((eq, i) => {
            const s = statusColors[eq.status as keyof typeof statusColors];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-4 p-4 rounded-2xl transition-all cursor-pointer"
                style={{ background: "var(--muted)" }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--jasu-blue)", color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 600 }}>
                  {eq.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)" }}>
                    {eq.name}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "var(--muted-foreground)" }}>
                    {eq.from} · NEET {eq.score}
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full" style={{ background: s.bg, color: s.color, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em" }}>
                  {s.label}
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "var(--muted-foreground)" }}>
                  {eq.time}
                </span>
                <ChevronRight size={14} color="var(--muted-foreground)" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

function StudentsView() {
  const [search, setSearch] = useState("");

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-8 flex items-center justify-between">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--foreground)" }}>
          My Students
        </h1>
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-xl"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <Search size={15} color="var(--muted-foreground)" />
          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ background: "transparent", border: "none", outline: "none", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "var(--foreground)", width: 180 }}
          />
        </div>
      </div>

      <div className="p-6 rounded-3xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <div className="flex flex-col gap-3">
          {enquiries.map((student, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: "var(--muted)" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--jasu-blue)" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#fff" }}>{student.name.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)" }}>{student.name}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "var(--muted-foreground)" }}>{student.from} · NEET Score: {student.score}</div>
              </div>
              <button className="px-3 py-1.5 rounded-xl text-sm" style={{ background: "var(--jasu-blue)", color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500 }}>
                Chat
              </button>
              <button className="px-3 py-1.5 rounded-xl text-sm" style={{ border: "1px solid var(--border)", background: "transparent", color: "var(--foreground)", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}>
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
