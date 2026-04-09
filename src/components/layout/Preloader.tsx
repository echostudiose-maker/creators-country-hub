import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Only capture size on client to avoid hydration mismatch and rendering bugs
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Show solid color while measuring to prevent flashes
  if (dimension.width === 0) {
    return <div className="fixed inset-0 z-[100] bg-background pointer-events-none" />;
  }

  const slideUp = {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  } as any;

  const curve = {
    initial: {
      d: dimension.width > 0 
        ? `M0 0 L${dimension.width} 0 L${dimension.width} 300 Q${dimension.width/2} 0 0 300 L0 0`
        : "M0 0",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: dimension.width > 0 
        ? `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width/2} 0 0 0 L0 0`
        : "M0 0",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  } as any;

  const textOpacity = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  } as any;

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background pointer-events-none"
    >
      <svg 
        className="absolute top-[100%] w-full"
        style={{ height: "300px" }}
        viewBox={`0 0 ${dimension.width} 300`}
      >
        <motion.path
          variants={curve}
          initial="initial"
          exit="exit"
          className="fill-background"
        />
      </svg>

      <motion.div
        variants={textOpacity}
        initial="initial"
        exit="exit"
        className="relative z-[101] flex flex-col items-center gap-6"
      >
        <motion.span 
          className="text-4xl text-white opacity-40 select-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          ✷
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
