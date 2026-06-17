import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is JASU recognized by MCI / NMC and WHO?",
    answer:
      "Yes. Jalal-Abad State University is recognized by the National Medical Commission (NMC, formerly MCI) of India, the World Health Organization (WHO), and listed in the World Directory of Medical Schools (WDOMS). Graduates are eligible to appear for FMGE / NExT licensing exams in India.",
  },
  {
    question: "What is the duration of the MBBS program at JASU?",
    answer:
      "The MBBS program at JASU is 5 years of academic study followed by 1 year of compulsory rotating internship, totaling 6 years. Teaching is conducted in English, making it accessible for Indian students without a language barrier.",
  },
  {
    question: "What is the total fee for the entire MBBS course?",
    answer:
      "The total fee for all 6 years (including tuition and hostel) ranges from approximately ₹25–30 Lakhs. This is significantly more affordable than private medical colleges in India while maintaining an equivalent quality of education. Contact our counselors for the current year's exact fee structure.",
  },
  {
    question: "What are the eligibility criteria for Indian students?",
    answer:
      "Candidates must have completed 10+2 with Physics, Chemistry, and Biology as core subjects with a minimum of 50% aggregate (40% for SC/ST/OBC). They must also have qualified NEET-UG as per NMC regulations. Age should be at least 17 years at the time of admission.",
  },
  {
    question: "Is NEET mandatory to study MBBS at JASU?",
    answer:
      "Yes. As per the NMC (National Medical Commission) regulations 2021, qualifying NEET-UG is mandatory for all Indian students seeking to pursue MBBS abroad. Failure to qualify NEET can result in ineligibility to practice medicine in India after returning.",
  },
  {
    question: "How safe is Kyrgyzstan for Indian students?",
    answer:
      "Kyrgyzstan is a peaceful, politically stable country and is one of the safest Central Asian nations. The city of Jalal-Abad has a large, well-established Indian student community. JASU has dedicated Indian student coordinators, Indian mess facilities, and a 24/7 helpline for student safety.",
  },
  {
    question: "What kind of support does JASU Consultancy provide after admission?",
    answer:
      "Our support doesn't end at admission. We assist with: flight booking, airport pickup in Kyrgyzstan, hostel allocation, bank account setup, SIM card, orientation, and ongoing academic guidance throughout your 6 years. We're a lifelong partner in your medical journey.",
  },
  {
    question: "How do I start the application process?",
    answer:
      "Simply click 'Apply Now' on our website, fill out the quick registration form, and one of our senior counselors will call you within 24 hours for a no-obligation consultation. The entire process from first call to admission letter takes approximately 3–4 weeks.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-2xl overflow-hidden"
      style={{
        border: `1px solid ${isOpen ? "rgba(0,113,227,0.25)" : "var(--border)"}`,
        background: isOpen ? "rgba(0,113,227,0.04)" : "var(--card)",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left transition-all duration-200"
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 500,
            color: isOpen ? "var(--jasu-blue)" : "var(--foreground)",
            lineHeight: 1.4,
            transition: "color 0.2s",
            paddingRight: "1rem",
          }}
        >
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: isOpen ? "var(--jasu-blue)" : "var(--muted)",
          }}
        >
          <Plus size={14} color={isOpen ? "#fff" : "var(--muted-foreground)"} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="px-6 pb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                color: "var(--muted-foreground)",
                lineHeight: 1.7,
              }}
            >
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
              color: "var(--jasu-blue)",
              background: "rgba(0,113,227,0.08)",
              border: "1px solid rgba(0,113,227,0.15)",
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--foreground)",
            }}
          >
            Everything you want to know,
            <br />
            <em style={{ fontStyle: "italic", color: "var(--jasu-blue)" }}>answered.</em>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
