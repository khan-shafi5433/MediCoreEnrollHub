import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { Star, Quote } from "lucide-react";

const stats = [
  { value: 2400, suffix: "+", label: "Students Successfully Enrolled", color: "#0071e3" },
  { value: 97, suffix: "%", label: "Admission Success Rate", color: "#00bfa5" },
  { value: 8, suffix: "+", label: "Years of Consultancy Experience", color: "#f59e0b" },
  { value: 15, suffix: "+", label: "University Partnerships", color: "#af52de" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    origin: "Mumbai, Maharashtra",
    year: "MBBS 4th Year",
    text: "JASU Consultancy made the whole process incredibly smooth. From my initial call to landing in Jalal-Abad, they were available 24/7. I couldn't have navigated the visa process alone.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&auto=format",
  },
  {
    name: "Arjun Mehta",
    origin: "Ahmedabad, Gujarat",
    year: "MBBS 2nd Year",
    text: "I was skeptical at first, but the transparency blew me away. No hidden fees, real timelines, and my counselor Rahul was always just a WhatsApp message away. Highly recommend!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format",
  },
  {
    name: "Anjali Patel",
    origin: "Jaipur, Rajasthan",
    year: "MBBS 3rd Year",
    text: "They handled everything — documents, visa, hostel, even the airport pickup. I just had to show up. The Indian student community at JASU is amazing too!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="trust" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "var(--secondary)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,113,227,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span
            className="inline-block mb-4 px-4 py-1 rounded-full"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#af52de",
              background: "rgba(175,82,222,0.08)",
              border: "1px solid rgba(175,82,222,0.15)",
            }}
          >
            TRUST & RESULTS
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
            Numbers that
            <br />
            <em style={{ fontStyle: "italic", color: "#af52de" }}>speak for themselves.</em>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-3xl text-center"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: stat.color,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  color: "var(--muted-foreground)",
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-8"
        >
          <h3
            className="text-center mb-12"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 600,
              color: "var(--foreground)",
            }}
          >
            What our students say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="relative p-8 rounded-3xl"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                }}
              >
                <Quote
                  size={28}
                  className="mb-4 opacity-20"
                  style={{ color: "var(--jasu-blue)" }}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill="#f59e0b"
                      color="#f59e0b"
                    />
                  ))}
                </div>

                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--foreground)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    style={{ border: "2px solid var(--border)" }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.7rem",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {t.origin} · {t.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
