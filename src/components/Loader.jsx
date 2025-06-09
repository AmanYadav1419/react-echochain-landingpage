import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col justify-center items-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Loading Wave Animation */}
          <motion.div
            className="flex justify-center items-end w-[300px] h-[100px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-[20px] h-[10px] mx-[5px] bg-blue-500 rounded-md animate-wave"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "1s",
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                }}
              />
            ))}
          </motion.div>

          <motion.p
            className="mt-4 text-blue-400 text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Loading EchoChain...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
