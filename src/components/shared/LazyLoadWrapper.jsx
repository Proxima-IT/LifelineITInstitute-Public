import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const LazyLoadWrapper = ({ children, className = "",  duration = 0.6,
  delay = 0, }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LazyLoadWrapper;
