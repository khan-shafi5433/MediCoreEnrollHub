import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, FileText, Shield, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Expert Guidance",
    description:
      "Our seasoned counselors have guided thousands of students through MBBS admissions at MediEnroll with personalized roadmaps and ongoing mentorship.",
    color: "#0071e3",
    bg: "rgba(0,113,227,0.08)",
  },
  {
    icon: FileText,
    title: "Admission Support",
    description:
      "End-to-end documentation assistance — from application forms and transcripts to visa processing and university enrollment.",
    color: "#00bfa5",
    bg: "rgba(0,191,165,0.08)",
  },
  {
    icon: Shield,
    title: "Transparent Process",
    description:
      "No hidden fees, no surprises. Real-time application tracking and complete clarity at every step of your admission journey.",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
  },
  {
    icon: HeartHandshake,
    title: "Student Assistance",
    description:
      "We don't disappear after admission. Ongoing support for accommodation, banking, language prep, and settling into university life.",
    color: "#af52de",
    bg: "rgba(175,82,222,0.08)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <section id="why-jasu" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,113,227,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <span
            className="inline-block mb-4 px-4 py-1 rounded-full"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "var(--jasu-blue)",
              background: "rgba(0,113,227,0.08)",
              border: "1px solid rgba(0,113,227,0.15)",
            }}
          >
            WHY CHOOSE MediEnroll CONSULTANCY
          </span>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--foreground)",
            }}
          >
            Everything you need,
            <br />
            <em style={{ fontStyle: "italic", color: "var(--jasu-blue)" }}>
              expertly handled.
            </em>
          </h2>

          <p
            className="mt-4 mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.05rem",
              fontWeight: 400,
              color: "var(--muted-foreground)",
              maxWidth: "48ch",
              lineHeight: 1.65,
            }}
          >
            From your first enquiry to your first day at MediEnroll — we're with you every step of the way.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="group relative p-8 rounded-3xl cursor-default"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${feature.color}10 0%, transparent 60%)`,
                }}
              />

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: feature.bg }}
              >
                <feature.icon size={22} color={feature.color} strokeWidth={1.5} />
              </div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--foreground)",
                  lineHeight: 1.2,
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.88rem",
                  fontWeight: 400,
                  color: "var(--muted-foreground)",
                  lineHeight: 1.65,
                }}
              >
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${feature.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
