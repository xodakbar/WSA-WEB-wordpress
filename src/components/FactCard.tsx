// FactCardBounce.tsx
import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedNumberAlways from "../components/AnimatedNumber";

type FactCardProps = {
  value: number;
  label: string;
  sublabel?: string;
  counterDuration?: number;
  steps?: number;
  formatNumber?: (n: number) => string;
};

const FactCardBounce: React.FC<FactCardProps> = ({
  value,
  label,
  sublabel,
  counterDuration = 2000,
  steps = 80,
  formatNumber,
}) => {
  const controls = useAnimation();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  // para reiniciar el contador cada vez que entra en vista
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      // reinicia el contador
      setResetKey((prev) => prev + 1);

      // lanza la animación bounce
      controls.start({
        y: [-50, 0, -10, 0],
        scale: [0.9, 1, 1.05, 1],
        opacity: [0, 1, 1, 1],
        transition: { duration: 1, ease: "easeOut" },
      });
    } else {
      // cuando sale de vista lo reseteamos a invisible
      controls.set({ y: -50, scale: 0.9, opacity: 0 });
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-2">
      <motion.div
        initial={{ y: -50, scale: 0.9, opacity: 0 }}
        animate={controls}
        className="text-4xl md:text-5xl font-bold text-white"
      >
        {/* key = resetKey → reinicia contador al reentrar en vista */}
        <AnimatedNumberAlways
          key={resetKey}
          value={value}
          duration={counterDuration}
          steps={steps}
          className=""
          format={formatNumber}
        />
      </motion.div>
      <p className="text-sm uppercase tracking-wide mt-2 text-white/80">{label}</p>
      {sublabel && <p className="text-xs text-white/60 mt-1">{sublabel}</p>}
    </div>
  );
};

export default FactCardBounce;
