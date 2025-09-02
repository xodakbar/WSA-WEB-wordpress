// FactCardBounce.tsx
import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

type FactCardProps = {
  value: string | number;
  label: string;
  sublabel?: string;
};

const FactCardBounce: React.FC<FactCardProps> = ({ value, label, sublabel }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        y: [ -50, 0, -10, 0 ],  // cae, rebota, se acomoda
        scale: [0.8, 1, 1.1, 1],
        opacity: [0, 1, 1, 1],
        transition: { duration: 1, ease: 'easeOut' },
      });
    } else {
      controls.set({ y: 0, scale: 1, opacity: 0 });
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-2">
      <motion.div
        animate={controls}
        className="text-4xl md:text-5xl font-bold text-white"
      >
        {value}
      </motion.div>
      <p className="text-sm uppercase tracking-wide mt-2 text-white/80">{label}</p>
      {sublabel && <p className="text-xs text-white/60 mt-1">{sublabel}</p>}
    </div>
  );
};

export default FactCardBounce;
