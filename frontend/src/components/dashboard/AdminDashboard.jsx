import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart2, Users, CreditCard, Settings, Shield,
  TrendingUp, ArrowUp, ArrowDown, Search, LogOut,
  CheckCircle2, Clock, XCircle, Download
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";

const admissionData = [
  { month: "Jan", students: 28 },
  { month: "Feb", students: 35 },
  { month: "Mar", students: 42 },
  { month: "Apr", students: 58 },
  { month: "May", students: 75 },
  { month: "Jun", students: 91 },
];

const revenueData = [
  { month: "Jan", revenue: 420000 },
  { month: "Feb", revenue: 525000 },
  { month: "Mar", revenue: 630000 },
  { month: "Apr", revenue: 870000 },
  { month: "May", revenue: 1125000 },
  { month: "Jun", revenue: 1365000 },
];

const stateData = [
  { name: "Maharashtra", value: 32, color: "#0071e3" },
  { name: "Gujarat", value: 24, color: "#00bfa5" },
  { name: "Rajasthan", value: 18, color: "#f59e0b" },
  { name: "Karnataka", value: 14, color: "#af52de" },
  { name: "Others", value: 12, color: "#6e6e73" },
];

const recentPayments = [
  { student: "Priya Sharma", amount: "₹15,000", type: "Consultancy Fee", status: "verified", date: "17 Jun" },
  { student: "Rohan Kumar", amount: "₹8,000", type: "Registration", status: "pending", date: "17 Jun" },
  { student: "Sneha Patel", amount: "₹2,10,000", type: "Year 1 Tuition", status: "verified", date: "16 Jun" },
  { student: "Vikram Singh", amount: "₹15,000", type: "Consultancy Fee", status: "flagged", date: "16 Jun" },
  { student: "Ananya Rao", amount: "₹85,000", type: "Hostel Year 1", status: "pending", date: "15 Jun" },
];

const sidebarItems = [
  { icon: BarChart2, label: "Analytics", id: "analytics" },
  { icon: Users, label: "Students", id: "students" },
  { icon: CreditCard, label: "Payments", id: "payments" },
  { icon: Shield, label: "Consultants", id: "consultants" },
  { icon: Settings, label: "Settings", id: "settings" },
];

const paymentStatusConfig = {
  verified: { color: "#30d158", bg: "rgba(48,209,88,0.1)", icon: CheckCircle2, label: "Verified" },
  pending: { color: "#f59e0b", bg: "rgba(245,158,11,0.1)", icon: Clock, label: "Pending" },
  flagged: { color: "#ff453a", bg: "rgba(255,69,58,0.1)", icon: XCircle, label: "Flagged" },
};

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("analytics");

  return (
    <div className="min-h-screen flex" style={{ paddingTop: "4rem", background: "var(--background)" }}>
      {/* Sidebar */}
      <aside
        className="fixed left-0 top-16 bottom-0 z-30 w-60 flex flex-col"
        style={{ background: "var(--sidebar)", borderRight: "1px solid var(--sidebar-border)" }}
      >
        <div className="p-4 flex items-center gap-3" style={{ borderBottom: "1px solid var(--sidebar-border)" }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,69,58,0.15)" }}>
            <Shield size={18} color="#ff453a" strokeWidth={1.5} />
          </div>
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "var(--sidebar-foreground)" }}>Admin Panel</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#ff453a" }}>Super Administrator</div>
          </div>
        </div>

        <nav className="flex-1 p-3 flex flex-col gap-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all w-full text-left"
              style={{
                background: activeSection === item.id ? "var(--sidebar-accent)" : "transparent",
                color: activeSection === item.id ? "var(--sidebar-primary)" : "var(--sidebar-foreground)",
              }}
            >
              <item.icon size={18} color={activeSection === item.id ? "var(--sidebar-primary)" : "var(--muted-foreground"} strokeWidth={1.5} />
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
        <div className="max-w-6xl mx-auto p-8">
          {activeSection === "analytics" && <AnalyticsView />}
          {activeSection === "students" && <AdminStudentsView />}
          {activeSection === "payments" && <PaymentsVerification />}
          {(activeSection === "consultants" || activeSection === "settings") && (
            <div className="flex items-center justify-center h-64">
              <p style={{ color: "var(--muted-foreground)", fontFamily: "'Inter', sans-serif" }}>
                {activeSection === "consultants" ? "Consultant management" : "Settings"} coming soon
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function AnalyticsView() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-8">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--foreground)" }}>
          Analytics Overview
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "var(--muted-foreground)", marginTop: "0.25rem" }}>
          MediEnroll Consultancy · June 2025
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Students", value: "329", change: "+18%", up: true, color: "#0071e3" },
          { label: "Monthly Revenue", value: "₹13.65L", change: "+22%", up: true, color: "#30d158" },
          { label: "Pending Applications", value: "47", change: "-8%", up: false, color: "#f59e0b" },
          { label: "Success Rate", value: "97.2%", change: "+0.5%", up: true, color: "#af52de" },
        ].map((kpi, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="p-5 rounded-2xl"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>
              {kpi.label}
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--foreground)", lineHeight: 1 }}>
              {kpi.value}
            </div>
            <div className="flex items-center gap-1 mt-2">
              {kpi.up ? <ArrowUp size={12} color="#30d158" /> : <ArrowDown size={12} color="#ff453a" />}
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: kpi.up ? "#30d158" : "#ff453a", fontWeight: 500 }}>
                {kpi.change} vs last month
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Admissions chart */}
        <div className="lg:col-span-2 p-6 rounded-3xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h3 className="mb-5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "var(--foreground)" }}>
            Monthly Admissions
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={admissionData}>
              <defs>
                <linearGradient id="admGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0071e3" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0071e3" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--muted-foreground)", fontFamily: "Inter" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "var(--muted-foreground)", fontFamily: "Inter" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "0.75rem", fontFamily: "Inter", fontSize: "0.8rem" }} />
              <Area type="monotone" dataKey="students" stroke="#0071e3" strokeWidth={2} fill="url(#admGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* State distribution */}
        <div className="p-6 rounded-3xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h3 className="mb-5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "var(--foreground)" }}>
            By State
          </h3>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={stateData} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value" strokeWidth={0}>
                {stateData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "0.75rem", fontFamily: "Inter", fontSize: "0.8rem" }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-1.5 mt-3">
            {stateData.map((d, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "var(--muted-foreground)" }}>{d.name}</span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "var(--foreground)", fontWeight: 500 }}>{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue chart */}
      <div className="p-6 rounded-3xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <h3 className="mb-5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "var(--foreground)" }}>
          Revenue (₹)
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--muted-foreground)", fontFamily: "Inter" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "var(--muted-foreground)", fontFamily: "Inter" }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 100000).toFixed(1)}L`} />
            <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "0.75rem", fontFamily: "Inter", fontSize: "0.8rem" }} formatter={(v) => [`₹${(v / 100000).toFixed(2)}L`, "Revenue"]} />
            <Bar dataKey="revenue" fill="#0071e3" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

function AdminStudentsView() {
  const students = [
    { name: "Priya Sharma", from: "Mumbai", score: 485, counselor: "Rahul S.", step: "Documentation", status: "active" },
    { name: "Rohan Kumar", from: "Delhi", score: 420, counselor: "Rahul S.", step: "Counselling", status: "active" },
    { name: "Sneha Patel", from: "Ahmedabad", score: 395, counselor: "Priya M.", step: "Registration", status: "new" },
    { name: "Vikram Singh", from: "Jaipur", score: 450, counselor: "Rahul S.", step: "Visa", status: "admitted" },
    { name: "Ananya Rao", from: "Bangalore", score: 510, counselor: "Priya M.", step: "Enrolled", status: "admitted" },
  ];

  const statusConfig = {
    new: { color: "#30d158", bg: "rgba(48,209,88,0.1)" },
    active: { color: "#0071e3", bg: "rgba(0,113,227,0.1)" },
    admitted: { color: "#af52de", bg: "rgba(175,82,222,0.1)" },
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-8 flex items-center justify-between">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--foreground)" }}>
          All Students
        </h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <Search size={14} color="var(--muted-foreground)" />
            <input type="text" placeholder="Search..." style={{ background: "transparent", border: "none", outline: "none", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "var(--foreground)", width: 160 }} />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <Download size={14} color="var(--muted-foreground)" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "var(--muted-foreground)" }}>Export</span>
          </button>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
        <table className="w-full">
          <thead>
            <tr style={{ background: "var(--muted)" }}>
              {["Student", "State", "NEET Score", "Counselor", "Current Step", "Status"].map((col) => (
                <th key={col} className="px-5 py-4 text-left" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "var(--muted-foreground)", letterSpacing: "0.06em" }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => {
              const sc = statusConfig[s.status];
              return (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "var(--card)" : "var(--background)" }}
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--jasu-blue)" }}>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "#fff" }}>{s.name.charAt(0)}</span>
                      </div>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)" }}>{s.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "var(--muted-foreground)" }}>{s.from}</td>
                  <td className="px-5 py-4" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem", color: "var(--foreground)", fontWeight: 500 }}>{s.score}</td>
                  <td className="px-5 py-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "var(--muted-foreground)" }}>{s.counselor}</td>
                  <td className="px-5 py-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "var(--foreground)" }}>{s.step}</td>
                  <td className="px-5 py-4">
                    <div className="inline-block px-2.5 py-1 rounded-full" style={{ background: sc.bg, color: sc.color, fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, textTransform: "capitalize" }}>
                      {s.status}
                    </div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function PaymentsVerification() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="mb-8">
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--foreground)" }}>
          Payment Verification
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "var(--muted-foreground)", marginTop: "0.25rem" }}>
          Review and verify incoming payments
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {recentPayments.map((payment, i) => {
          const sc = paymentStatusConfig[payment.status];
          const StatusIcon = sc.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-5 p-5 rounded-2xl"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--jasu-blue)" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>{payment.student.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500, color: "var(--foreground)" }}>{payment.student}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{payment.type} · {payment.date}</div>
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--foreground)" }}>{payment.amount}</div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: sc.bg }}>
                <StatusIcon size={12} color={sc.color} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: sc.color }}>{sc.label}</span>
              </div>
              {payment.status === "pending" && (
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-xl" style={{ background: "rgba(48,209,88,0.1)", color: "#30d158", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, border: "1px solid rgba(48,209,88,0.2)" }}>
                    Verify
                  </button>
                  <button className="px-3 py-1.5 rounded-xl" style={{ background: "rgba(255,69,58,0.1)", color: "#ff453a", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, border: "1px solid rgba(255,69,58,0.2)" }}>
                    Flag
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
