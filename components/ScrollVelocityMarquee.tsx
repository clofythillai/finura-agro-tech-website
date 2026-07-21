"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

interface VelocityMarqueeProps {
  baseVelocity: number;
  children: string[];
  dark?: boolean;
}

// Inline wrap function to avoid dependencies
const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export default function ScrollVelocityMarquee({
  baseVelocity = 2,
  children,
  dark = true,
}: VelocityMarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1.2], {
    clamp: true,
  });

  const directionFactor = useRef<number>(1);
  useAnimationFrame((time, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    const vFactor = velocityFactor.get();
    if (vFactor < 0) {
      directionFactor.current = -1;
    } else if (vFactor > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * Math.abs(vFactor);
    baseX.set(baseX.get() + moveBy);
  });

  // Infinite wrapping range between -20% and -45%
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  return (
    <div
      className={`overflow-hidden flex flex-nowrap border-y-3 border-brand-black py-3 select-none ${
        dark ? "bg-brand-black text-brand-lime" : "bg-brand-lime text-brand-black"
      }`}
    >
      <motion.div
        className="flex whitespace-nowrap flex-nowrap gap-4 uppercase font-display font-700 text-sm tracking-widest"
        style={{ x }}
      >
        {Array.from({ length: 8 }).map((_, idx) => (
          <span key={idx} className="flex items-center flex-shrink-0">
            {children.map((item, i) => (
              <span key={i} className="flex items-center">
                {item}
                <span
                  className={`mx-4 text-lg ${
                    dark ? "text-brand-orange" : "text-brand-black"
                  }`}
                >
                  ◆
                </span>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
