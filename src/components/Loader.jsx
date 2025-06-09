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
          <motion.div
            className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p className="mt-4 text-blue-400 text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Loading EchoChain...
          </motion.p>
        </motion.div>
      )}
  
      {/* <StyledWrapper>
      <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="loading">
        <span />
        <span />
        <span />
        <span />
        <span />
      </motion.div>
    </StyledWrapper> */}
    </AnimatePresence>
  );
};

export default Loader;

// const Loader = () => {
//   return (
//     <StyledWrapper>
//       <div className="loading">
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .loading {
//    --speed-of-animation: 0.9s;
//    --gap: 6px;
//    --first-color: #4c86f9;
//    --second-color: #49a84c;
//    --third-color: #f6bb02;
//    --fourth-color: #f6bb02;
//    --fifth-color: #2196f3;
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    width: 100px;
//    gap: 6px;
//    height: 100px;
//   }

//   .loading span {
//    width: 4px;
//    height: 50px;
//    background: var(--first-color);
//    animation: scale var(--speed-of-animation) ease-in-out infinite;
//   }

//   .loading span:nth-child(2) {
//    background: var(--second-color);
//    animation-delay: -0.8s;
//   }

//   .loading span:nth-child(3) {
//    background: var(--third-color);
//    animation-delay: -0.7s;
//   }
  
//   .loading span:nth-child(4) {
//    background: var(--fourth-color);
//    animation-delay: -0.6s;
//    }
   
//    .loading span:nth-child(5) {
//     background: var(--fifth-color);
//     animation-delay: -0.5s;
//   }

//   @keyframes scale {
//     0%, 40%, 100% {
//       transform: scaleY(0.05);
//       }
      
//       20% {
//         transform: scaleY(1);
//    }
//   }`;
  
  
// export default Loader;