import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router";

const floatingCards = [
  { icon: Users, label: "Students Placed", value: "2,400+", color: "#0071e3", delay: 0 },
  { icon: Award, label: "Success Rate", value: "97%", color: "#00bfa5", delay: 0.15 },
  { icon: Clock, label: "Years Experience", value: "8+", color: "#f59e0b", delay: 0.3 },
];

const words = ["Your", "Journey", "To", "Becoming", "A", "Doctor", "Starts", "Here"];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(-1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setWordIndex(i);
      i++;
      if (i >= words.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "5rem" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop&auto=format"
          alt="Medical university"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.25) saturate(1.2)" }}
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,113,227,0.15) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,5,7,0) 0%, rgba(5,5,7,0.8) 70%, rgba(5,5,7,1) 100%)",
          }}
        />
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(0,113,227,0.3) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(0,191,165,0.2) 0%, transparent 40%)",
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute rounded-full opacity-20 pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(0,113,227,0.4) 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
        }}
        animate={{
          x: mousePos.x * -30,
          y: mousePos.y * -20,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute rounded-full opacity-15 pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(0,191,165,0.5) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
        }}
        animate={{
          x: mousePos.x * 20,
          y: mousePos.y * 15,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(0,113,227,0.15)",
              border: "1px solid rgba(0,113,227,0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--jasu-teal)" }} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "rgba(245,245,247,0.9)",
                letterSpacing: "0.06em",
              }}
            >
              MBBS ADMISSIONS 2025–26 NOW OPEN
            </span>
          </motion.div>

          {/* Main heading */}
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#f5f5f7",
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={
                  wordIndex >= i
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : {}
                }
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block mr-[0.2em]"
                style={{
                  color: i === 5 ? "var(--jasu-blue)" : "#f5f5f7",
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: 400,
              color: "rgba(245,245,247,0.6)",
              maxWidth: "56ch",
              margin: "0 auto 2.5rem",
              lineHeight: 1.6,
            }}
          >
            MBBS Admission Guidance for Jalal-Abad State University, Kyrgyzstan.
            Expert counseling, seamless documentation, and complete travel support.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <MagneticButton>
              <Link
                to="/dashboard/student"
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full transition-all duration-300"
                style={{
                  background: "var(--jasu-blue)",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  boxShadow: "0 0 0 0 rgba(0,113,227,0.4)",
                }}
              >
                Apply Now
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://wa.me/+996700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#f5f5f7",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  backdropFilter: "blur(10px)",
                }}
              >
                <MessageCircle size={16} />
                Talk To Consultant
              </a>
            </MagneticButton>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: card.delay,
                }}
                className="flex items-center gap-3 px-5 py-4 rounded-2xl"
                style={{
                  background: "rgba(28,28,30,0.7)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  minWidth: "160px",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${card.color}22` }}
                >
                  <card.icon size={18} color={card.color} />
                </div>
                <div className="text-left">
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#f5f5f7",
                      lineHeight: 1.1,
                    }}
                  >
                    {card.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.7rem",
                      color: "rgba(245,245,247,0.5)",
                      fontWeight: 400,
                    }}
                  >
                    {card.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            color: "rgba(245,245,247,0.3)",
            fontWeight: 500,
          }}
        >
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(245,245,247,0.3), transparent)" }}
        />
      </motion.div>
    </section>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
