import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Paperclip, Smile, Phone, Video, MoreHorizontal } from "lucide-react";

const initialMessages = [
  {
    id: 1,
    sender: "consultant",
    text: "Hello! Welcome to MediEnroll Consultancy. I'm Rahul, your dedicated counselor. How can I help you today?",
    time: "10:32 AM",
  },
  {
    id: 2,
    sender: "user",
    text: "Hi Rahul! I just got my NEET score and I'm interested in MBBS at MediEnroll. Can you help me understand the process?",
    time: "10:33 AM",
    status: "read",
  },
  {
    id: 3,
    sender: "consultant",
    text: "Congratulations on your NEET result! Absolutely, I'd be happy to guide you through the entire admission process at Jalal-Abad State University.",
    time: "10:34 AM",
  },
  {
    id: 4,
    sender: "consultant",
    text: "First, could you share your NEET score and which state you're applying from? This will help me give you the most accurate information about eligibility and fees.",
    time: "10:34 AM",
  },
  {
    id: 5,
    sender: "user",
    text: "I scored 420 in NEET and I'm from Maharashtra. What are the documents I need to prepare?",
    time: "10:36 AM",
    status: "read",
  },
];

export function ChatUI({
  consultantName = "Rahul Sharma",
  consultantRole = "Senior Counselor · MediEnroll",
  avatar = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format",
}) {
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      status: "sent",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const reply = {
        id: messages.length + 2,
        text: "Thank you for sharing that! With a score of 420 and Maharashtra domicile, you're well-positioned for MediEnroll. Let me send you the complete document checklist right away.",
        sender: "consultant",
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, reply]);
    }, 2500);
  };

  return (
    <div
      className="flex flex-col h-full"
      style={{
        background: "var(--background)",
        border: "1px solid var(--border)",
        borderRadius: "1.5rem",
        overflow: "hidden",
      }}
    >
      {/* Chat header */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{
          background: "var(--card)",
          borderBottom: "1px solid var(--border)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={avatar}
              alt={consultantName}
              className="w-10 h-10 rounded-full object-cover"
              style={{ border: "2px solid var(--border)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-3 h-3 rounded-full"
              style={{
                background: "#30d158",
                border: "2px solid var(--card)",
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              {consultantName}
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                color: "#30d158",
                fontWeight: 500,
              }}
            >
              {isTyping ? "typing..." : "Online"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {[Phone, Video, MoreHorizontal].map((Icon, i) => (
            <button
              key={i}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ background: "var(--muted)" }}
            >
              <Icon size={14} color="var(--muted-foreground)" />
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-5 py-4"
        style={{
          background: "var(--background)",
          scrollbarWidth: "none",
        }}
      >
        <div className="flex flex-col gap-4">
          {messages.map((msg, i) => (
            <MessageBubble key={msg.id} message={msg} index={i} />
          ))}

          {/* Typing indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-end gap-2"
              >
                <img
                  src={avatar}
                  alt="Consultant"
                  className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                />
                <div
                  className="px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{ background: "var(--muted-foreground)" }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div
        className="px-4 py-4"
        style={{
          background: "var(--card)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-2xl"
          style={{
            background: "var(--muted)",
            border: "1px solid var(--border)",
          }}
        >
          <button className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110">
            <Paperclip size={15} color="var(--muted-foreground)" />
          </button>

          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 bg-transparent outline-none"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "var(--foreground)",
              border: "none",
            }}
          />

          <button className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110">
            <Smile size={15} color="var(--muted-foreground)" />
          </button>

          <motion.button
            onClick={sendMessage}
            disabled={!inputText.trim()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              background: inputText.trim() ? "var(--jasu-blue)" : "var(--muted-foreground)",
              opacity: inputText.trim() ? 1 : 0.4,
            }}
          >
            <Send size={14} color="#fff" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ message, index }) {
  const isUser = message.sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {!isUser && (
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format"
          alt="Consultant"
          className="w-7 h-7 rounded-full object-cover flex-shrink-0"
        />
      )}

      <div className={`flex flex-col gap-1 max-w-[75%] ${isUser ? "items-end" : "items-start"}`}>
        <div
          className="px-4 py-3"
          style={{
            background: isUser ? "var(--jasu-blue)" : "var(--card)",
            border: isUser ? "none" : "1px solid var(--border)",
            borderRadius: isUser
              ? "1.25rem 1.25rem 0.25rem 1.25rem"
              : "1.25rem 1.25rem 1.25rem 0.25rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: isUser ? "#fff" : "var(--foreground)",
              lineHeight: 1.55,
            }}
          >
            {message.text}
          </p>
        </div>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.65rem",
            color: "var(--muted-foreground)",
          }}
        >
          {message.time}
          {isUser && message.status && (
            <span className="ml-1 opacity-70">
              {message.status === "read" ? "✓✓" : "✓"}
            </span>
          )}
        </span>
      </div>
    </motion.div>
  );
}
