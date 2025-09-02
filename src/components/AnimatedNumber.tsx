// AnimatedNumberAlways.tsx
import React, { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
}

const AnimatedNumberAlways: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2000,
  className,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16); // 16ms ~ 60fps

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [value, duration]);

  return <div className={className}>{displayValue}</div>;
};

export default AnimatedNumberAlways;
