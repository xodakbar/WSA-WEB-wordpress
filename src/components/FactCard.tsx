// components/FactCard.tsx
import React, { useEffect, useState } from 'react';
import AnimatedNumber from './AnimatedNumber';
import { useInView } from 'framer-motion';

type FactCardProps = {
  value: number;
  label: string;
  sublabel?: string;
};

const FactCard: React.FC<FactCardProps> = ({ value, label, sublabel }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(false); // reset
      setTimeout(() => setShouldAnimate(true), 50); // retrigger animation
    }
  }, [isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center">
      <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
        {shouldAnimate ? <AnimatedNumber value={value} /> : 0}
      </div>
      <p className="text-sm uppercase tracking-wide mt-2 text-white/80">{label}</p>
      {sublabel && (
        <p className="text-xs text-white/60 mt-1">{sublabel}</p>
      )}
    </div>
  );
};

export default FactCard;
