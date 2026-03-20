import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const TOOLS = [
  { emoji: "🔨", size: 36, x: "8%",  y: "15%", duration: 6,  delay: 0 },
  { emoji: "🔧", size: 28, x: "80%", y: "10%", duration: 7,  delay: 1 },
  { emoji: "🪛", size: 32, x: "88%", y: "55%", duration: 8,  delay: 0.5 },
  { emoji: "📏", size: 26, x: "5%",  y: "65%", duration: 9,  delay: 2 },
  { emoji: "🪚", size: 34, x: "75%", y: "80%", duration: 7,  delay: 1.5 },
  { emoji: "🔩", size: 22, x: "20%", y: "82%", duration: 10, delay: 0.3 },
  { emoji: "🪝", size: 28, x: "50%", y: "88%", duration: 6,  delay: 2.5 },
  { emoji: "⚙️", size: 30, x: "92%", y: "25%", duration: 11, delay: 1 },
  { emoji: "🔑", size: 24, x: "15%", y: "35%", duration: 8,  delay: 3 },
  { emoji: "🪣", size: 28, x: "60%", y: "5%",  duration: 9,  delay: 0.8 },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
      <Navbar />
      <main className="flex-1 flex items-center justify-center overflow-hidden relative">
        {/* плавающие инструменты */}
        {TOOLS.map((tool, i) => (
          <motion.span
            key={i}
            className="absolute pointer-events-none select-none"
            style={{ left: tool.x, top: tool.y, fontSize: tool.size, opacity: 0.18 }}
            animate={{ y: [0, -18, 0, 12, 0], rotate: [0, 10, -8, 6, 0] }}
            transition={{ duration: tool.duration, delay: tool.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            {tool.emoji}
          </motion.span>
        ))}

        {/* фоновый акцент */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(234,179,8,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-yellow-500 text-sm md:text-base font-semibold tracking-widest uppercase mb-4"
          >
            Усть‑Кут
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative inline-block"
            style={{ fontSize: "clamp(3.5rem, 14vw, 10rem)" }}
          >
            <img
              src="https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/0f37afeb-2ed1-4004-a259-f654f185140c.png"
              alt="МАСТЕРОФФ"
              style={{ height: "clamp(6rem, 22vw, 16rem)", width: "auto" }}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-zinc-400 text-lg md:text-2xl mt-4 mb-10 max-w-xl"
          >
            Первый сервис разнорабочих в Усть‑Куте
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/master-na-chas")}
            className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold text-lg md:text-xl px-10 py-4 rounded-2xl transition-colors"
          >
            Вызвать мастера
          </motion.button>
        </div>
      </main>
    </div>
  );
};

export default Index;