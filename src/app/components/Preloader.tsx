import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
};

const slideUp = {
  initial: {
    top: 0,
    position: "fixed",
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 9999,
    background: "black"
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.2 }
  }
};

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
    "Hola",
    "Привет",
    "नमस्ते",
  "السلام علیکم",
];

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(onFinish, 700);
      return;
    }
    const timeout = setTimeout(
      () => setIndex(index + 1),
      index === 0 ? 1000 : 150
    );
    return () => clearTimeout(timeout);
  }, [index, onFinish]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.3 }
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="initial"
      exit="exit"
      className="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="text-4xl md:text-6xl font-bold text-white"
          >
            {words[index]}
          </motion.p>
          <svg className="absolute bottom-0 left-0 w-full h-32" width={dimension.width} height="128">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              fill="#000"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}