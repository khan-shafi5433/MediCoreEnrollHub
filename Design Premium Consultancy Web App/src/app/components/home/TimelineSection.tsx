import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { UserPlus, MessageSquare, FileCheck, GraduationCap, Plane } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Register",
    description:
      "Create your account and fill in your academic details. Our system instantly matches you with the right program and counselor.",
    duration: "5 minutes",
    color: "#0071e3",
    bgColor: "rgba(0,113,227,0.08)",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Counselling",
    description:
      "A dedicated expert counselor calls you within 24 hours. We assess your profile, answer every question, and create your personalized admission strategy.",
    duration: "1–2 days",
    color: "#00bfa5",
    bgColor: "rgba(0,191,165,0.08)",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Documentation",
    description:
      "We guide you through every document — mark sheets, medical certificate, passport, and more. Our team reviews everything before submission.",
    duration: "5–7 days",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.08)",
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Admission",
    description:
      "Your application is submitted directly to JASU. Upon approval, you receive your official admission letter and begin visa processing.",
    duration: "2–3 weeks",
    color: "#af52de",
    bgColor: "rgba(175,82,222,0.08)",
  },
  {
    number: "05",
    icon: Plane,
    title: "Travel Support",
    description:
      "From flight booking to airport pickup in Kyrgyzstan — we handle it all. Our team ensures you land safely and settle into your new home.",
    duration: "Travel day",
    color: "#ff6b6b",
    bgColor: "rgba(255,107,107,0.08)",
  },
];

export function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="admission" className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0,113,227,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <span
            className="inline-block mb-4 px-4 py-1 rounded-full"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#f59e0b",
              background: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.15)",
            }}
          >
            ADMISSION JOURNEY
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
            Five steps to your
            <br />
            <em style={{ fontStyle: "italic", color: "#f59e0b" }}>
              medical career.
            </em>
          </h2>

          <p
            className="mt-4 mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.05rem",
              color: "var(--muted-foreground)",
              maxWidth: "44ch",
              lineHeight: 1.65,
            }}
          >
            A clear, transparent path from enquiry to enrollment — with expert
            guidance at every milestone.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, var(--border) 10%, var(--border) 90%, transparent)" }}
          />

          <div className="flex flex-col gap-12 lg:gap-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <StepCard key={i} step={step} index={i} isLeft={isLeft} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  isLeft,
}: {
  step: (typeof steps)[0];
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-8 lg:gap-0 ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: index * 0.08,
        }}
        className={`group relative p-8 rounded-3xl lg:w-[calc(50%-3rem)] ${isLeft ? "lg:mr-12" : "lg:ml-12"}`}
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        }}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      >
        <div className="flex items-start gap-5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: step.bgColor }}
          >
            <step.icon size={22} color={step.color} strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  color: step.color,
                  letterSpacing: "0.08em",
                }}
              >
                STEP {step.number}
              </span>
              <span
                className="px-2 py-0.5 rounded-full"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  color: "var(--muted-foreground)",
                  background: "var(--muted)",
                }}
              >
                {step.duration}
              </span>
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.88rem",
                color: "var(--muted-foreground)",
                lineHeight: 1.65,
              }}
            >
              {step.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-10"
        style={{
          background: step.bgColor,
          border: `2px solid ${step.color}40`,
          boxShadow: `0 0 0 4px var(--background), 0 0 20px ${step.color}30`,
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.9rem",
            fontWeight: 700,
            color: step.color,
          }}
        >
          {index + 1}
        </span>
      </motion.div>

      {/* Spacer for the other side */}
      <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
    </div>
  );
}
