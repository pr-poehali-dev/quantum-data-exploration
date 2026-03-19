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
            className="text-white font-extrabold leading-none tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 14vw, 10rem)" }}
          >
            МАСТЕР<span className="bg-yellow-500 text-zinc-950 px-2 rounded-lg">ОФФ</span>
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