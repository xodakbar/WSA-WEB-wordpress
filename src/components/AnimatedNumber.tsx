// AnimatedNumberAlways.tsx
import React, { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;          // número final
  duration?: number;      // ms totales (default 2000)
  className?: string;
  startValue?: number;    // desde dónde comienza (default 0)
  steps?: number;         // cantidad de “saltos” visibles (default 100)
  format?: (n: number) => string; // formateo opcional
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const AnimatedNumberAlways: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 10000,
  className,
  startValue = 0,
  steps = 100,
  format,
}) => {
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    let startTime: number | null = null;
    let rafId: number;

    const totalDelta = value - startValue;
    const stepSize = Math.max(1, Math.floor(Math.abs(totalDelta) / steps)) * Math.sign(totalDelta);

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const progress = easeOutCubic(rawProgress);

      let current = startValue + totalDelta * progress;

      // Mientras no haya terminado, “snap” a pasos visibles
      if (rawProgress < 1 && Math.abs(stepSize) > 1) {
        current = Math.round(current / stepSize) * stepSize;
      }

      // Asegura que nunca se pase del límite en el camino
      if (totalDelta >= 0) current = Math.min(current, value);
      else current = Math.max(current, value);

      // Al final, garantiza EXACTAMENTE el valor final
      if (rawProgress === 1) current = value;

      setDisplayValue(Math.floor(current));

      if (rawProgress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [value, duration, startValue, steps]);

  const shown = format ? format(displayValue) : String(displayValue);
  return <div className={className}>{shown}</div>;
};

export default AnimatedNumberAlways;
