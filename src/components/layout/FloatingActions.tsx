import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  PhoneCall,
  Mail,
} from "lucide-react";
import { SITE } from "@/lib/site";

type ChatMessage = {
  type: "bot" | "user";
  text: string;
};

const options = [
  "ERP Consultation",
  "Digital Marketing",
  "Website Development",
  "SEO Services",
  "Career Inquiry",
];

const botReplies: Record<string, string> = {
  "ERP Consultation":
    "Great. Please share your business type and current ERP or manual process. Our team will guide you with the best implementation plan.",
  "Digital Marketing":
    "Perfect. Please share your business website and target location so we can suggest a lead generation strategy.",
  "Website Development":
    "Sure. Please tell us what type of website you need, business website, landing page, portfolio, ecommerce or custom platform.",
  "SEO Services":
    "Good choice. Please share your website URL and main target keywords or services. We will review the SEO opportunity.",
  "Career Inquiry":
    "Thanks for your interest. Please share your role, experience and portfolio or CV details.",
};

const contactEmail = "info@businessgenie.net";

// WhatsApp number country code ke sath hota hai.
// Baad me sirf ye number change kar lena.
const whatsappNumber = "+923394050121";

const whatsappUrl = whatsappNumber
  ? `https://wa.me/${whatsappNumber}`
  : SITE.whatsappUrl;

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: "bot",
      text: "Hi! Welcome to Business Genie Consulting. How can we help your business today?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  if (!mounted) return null;

  const sendMessage = (text?: string) => {
    const value = text || input.trim();

    if (!value) return;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: value,
      },
    ]);

    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text:
            botReplies[value] ||
            "Thanks for your message. Our team will review it and contact you shortly.",
        },
      ]);
    }, 700);
  };

  return (
    <>
      {/* Chat Box */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed bottom-24 right-5 z-50 w-[350px] max-w-[calc(100vw-40px)] overflow-hidden rounded-3xl border border-white/10 bg-[#070707] shadow-2xl shadow-black/50 sm:right-6"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-orange px-5 py-4 text-black">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/25 blur-2xl" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-black/10">
                    <Bot className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-sm font-bold">Business Genie</div>
                    <div className="flex items-center gap-1.5 text-xs opacity-80">
                      <span className="h-2 w-2 rounded-full bg-green-600" />
                      Online, replies quickly
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setChatOpen(false)}
                  className="grid h-8 w-8 place-items-center rounded-full bg-black/10 transition hover:bg-black/20"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[310px] overflow-y-auto bg-[#050505] px-4 py-5">
              <div className="space-y-3">
                {messages.map((msg, index) => (
                  <div
                    key={`${msg.text}-${index}`}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[84%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.type === "user"
                          ? "rounded-br-sm bg-gradient-orange text-black"
                          : "rounded-bl-sm bg-white/10 text-white/85"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Quick Options */}
            <div className="border-t border-white/10 bg-[#080808] px-4 py-3">
              <div className="mb-3 flex flex-wrap gap-2">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => sendMessage(option)}
                    className="rounded-full border border-[var(--brand-orange)]/35 px-3 py-1.5 text-[11px] text-[var(--brand-orange)] transition-all duration-300 hover:bg-[var(--brand-orange)] hover:text-black"
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage();
                  }}
                  placeholder="Type your message..."
                  className="h-9 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                />

                <button
                  onClick={() => sendMessage()}
                  className="grid h-9 w-9 place-items-center rounded-full bg-gradient-orange text-black transition-transform duration-300 hover:scale-105"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              {/* Contact Actions */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-white/65 transition hover:border-[var(--brand-orange)]/50 hover:text-[var(--brand-orange)]"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Email
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-white/65 transition hover:border-[#25D366]/50 hover:text-[#25D366]"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setChatOpen((prev) => !prev)}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-gradient-orange text-black shadow-2xl shadow-[var(--brand-orange)]/30 sm:right-6"
        aria-label="Open live chat"
      >
        <AnimatePresence mode="wait">
          {chatOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-7 w-7" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-7 w-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}