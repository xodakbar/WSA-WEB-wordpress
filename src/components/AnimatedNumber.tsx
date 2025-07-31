import React, { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  animate?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 1500,
  className,
  animate = true,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!animate) {
      // Mostrar valor directo si no animar
      setDisplayValue(value);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animateNumber = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateNumber);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animateNumber);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration, animate]);

  return <p className={className}>{displayValue}</p>;
};

export default AnimatedNumber;
