import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const slides = [
  {
    title: "World-Class University",
    subtitle: "Accredited by MCI & WHO",
    description:
      "Jalal-Abad State University stands among Central Asia's premier medical institutions, recognized globally for its rigorous curriculum, state-of-the-art labs, and international faculty.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&h=600&fit=crop&auto=format",
    alt: "JASU university campus building",
    tag: "University",
  },
  {
    title: "Stunning Campus Life",
    subtitle: "A home away from home",
    description:
      "Set against the breathtaking Kyrgyz landscape, the JASU campus offers modern dormitories, sports facilities, and a vibrant student community from across South Asia.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&h=600&fit=crop&auto=format",
    alt: "Campus student life",
    tag: "Campus",
  },
  {
    title: "Clinical Excellence",
    subtitle: "Hands-on medical training",
    description:
      "From Year 2 onwards, students gain clinical exposure in JASU's attached hospitals, working alongside experienced physicians treating a diverse patient population.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&h=600&fit=crop&auto=format",
    alt: "Medical students in clinical training",
    tag: "Medical Education",
  },
  {
    title: "Student Community",
    subtitle: "5,000+ Indian students already there",
    description:
      "A thriving Indian student body, cultural associations, and dedicated mess facilities ensure you never feel far from home while building friendships that last a lifetime.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=600&fit=crop&auto=format",
    alt: "Students studying together",
    tag: "Student Life",
  },
];

function ExperienceSlide({
  slide,
  index,
}: {
  slide: (typeof slides)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        className="relative flex-1 w-full"
      >
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{ aspectRatio: "4/3" }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            style={{ transform: "scale(1.02)" }}
          />
          {/* Image overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,113,227,0.15) 0%, transparent 50%)",
            }}
          />
          {/* Tag */}
          <div
            className="absolute top-5 left-5 px-3 py-1 rounded-full"
            style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.8)",
                letterSpacing: "0.06em",
              }}
            >
              {slide.tag}
            </span>
          </div>
        </div>

        {/* Decorative element */}
        <div
          className="absolute -bottom-4 -right-4 w-32 h-32 rounded-3xl -z-10 opacity-40"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,113,227,0.3), rgba(0,191,165,0.3))",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 60 : -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        className="flex-1 w-full"
      >
        <span
          className="inline-block mb-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "var(--jasu-teal)",
          }}
        >
          {slide.subtitle.toUpperCase()}
        </span>

        <h3
          className="mb-5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
          }}
        >
          {slide.title}
        </h3>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.05rem",
            fontWeight: 400,
            color: "var(--muted-foreground)",
            lineHeight: 1.7,
            maxWidth: "42ch",
          }}
        >
          {slide.description}
        </p>

        {/* Progress indicator */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: i === index ? "2rem" : "0.5rem",
                background:
                  i === index ? "var(--jasu-blue)" : "var(--border)",
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
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
              color: "var(--jasu-teal)",
              background: "rgba(0,191,165,0.08)",
              border: "1px solid rgba(0,191,165,0.15)",
            }}
          >
            THE JASU EXPERIENCE
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
            More than a degree.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--jasu-teal)" }}>
              A transformation.
            </em>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-28">
          {slides.map((slide, i) => (
            <ExperienceSlide key={i} slide={slide} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
