import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#09090B" }}>
      <Navbar />
      <main className="flex-1 flex items-center justify-center overflow-hidden relative">
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
            className="text-white font-extrabold leading-none tracking-tight relative inline-block"
            style={{ fontSize: "clamp(3.5rem, 14vw, 10rem)" }}
          >
            <span className="relative inline-block">
              <svg
                className="absolute pointer-events-none"
                style={{
                  top: "-8px",
                  left: "-8px",
                  width: "calc(100% + 16px)",
                  height: "calc(100% + 16px)",
                }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
              >
                <rect
                  x="1" y="1" width="98" height="98" rx="10" ry="10"
                  stroke="url(#snakeGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="380"
                  strokeDashoffset="0"
                  fill="none"
                  style={{
                    animation: "snakeSpin 2.5s linear infinite",
                  }}
                />
                <defs>
                  <linearGradient id="snakeGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </svg>
              МАСТЕР<span className="bg-yellow-500 text-zinc-950 px-2 rounded-lg">ОФФ</span>
            </span>
          </motion.h1>
          <style>{`
            @keyframes snakeSpin {
              from { stroke-dashoffset: 0; }
              to { stroke-dashoffset: -380; }
            }
          `}</style>

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