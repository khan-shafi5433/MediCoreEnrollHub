import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MessageCircle, Mail, Phone, Calendar, ArrowRight, MapPin } from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+996 700 123 456",
    description: "Available 9am – 9pm IST",
    color: "#25d366",
    bg: "rgba(37,211,102,0.08)",
    href: "https://wa.me/996700123456",
  },
  {
    icon: Mail,
    label: "Email",
    value: "admit@jasuconsultancy.com",
    description: "Reply within 2 hours",
    color: "#0071e3",
    bg: "rgba(0,113,227,0.08)",
    href: "mailto:admit@jasuconsultancy.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    description: "Direct India line",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    href: "tel:+919876543210",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #050507 0%, #0a0e1a 50%, #050507 100%)",
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,113,227,0.2) 0%, transparent 60%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block mb-4 px-4 py-1 rounded-full"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#00bfa5",
              background: "rgba(0,191,165,0.12)",
              border: "1px solid rgba(0,191,165,0.2)",
            }}
          >
            GET IN TOUCH
          </span>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#f5f5f7",
            }}
          >
            Your dream starts with
            <br />
            <em style={{ fontStyle: "italic", color: "var(--jasu-blue)" }}>
              one conversation.
            </em>
          </h2>

          <p
            className="mt-4 mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.05rem",
              color: "rgba(245,245,247,0.55)",
              maxWidth: "44ch",
              lineHeight: 1.65,
            }}
          >
            Talk to a senior counselor — with no obligation. We'll answer every question and build your personal admission plan.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative p-10 rounded-3xl mb-8"
          style={{
            background: "rgba(28,28,30,0.6)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(30px)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group flex flex-col p-6 rounded-2xl transition-all duration-300 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  textDecoration: "none",
                }}
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: method.bg }}
                >
                  <method.icon size={20} color={method.color} strokeWidth={1.5} />
                </div>

                <div
                  className="mb-1"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "rgba(245,245,247,0.4)",
                  }}
                >
                  {method.label}
                </div>

                <div
                  className="mb-1"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#f5f5f7",
                  }}
                >
                  {method.value}
                </div>

                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(245,245,247,0.4)",
                  }}
                >
                  {method.description}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Book consultation CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(0,113,227,0.15)" }}
                >
                  <MapPin size={18} color="#2997ff" strokeWidth={1.5} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "#f5f5f7",
                    }}
                  >
                    Offices in Delhi, Mumbai & Kyrgyzstan
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(245,245,247,0.4)",
                    }}
                  >
                    Walk-in counselling available Mon–Sat
                  </div>
                </div>
              </div>

              <motion.a
                href="https://wa.me/996700123456?text=Hi%2C%20I%20want%20to%20book%20a%20MBBS%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full transition-all duration-300"
                style={{
                  background: "var(--jasu-blue)",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  boxShadow: "0 0 30px rgba(0,113,227,0.3)",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Calendar size={16} />
                Book Consultation
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.78rem",
            color: "rgba(245,245,247,0.3)",
          }}
        >
          Professional consultation · No spam · We respect your privacy
        </motion.p>
      </div>
    </section>
  );
}
