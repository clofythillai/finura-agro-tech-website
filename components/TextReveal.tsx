"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const words = text.split(" ");

  return (
    <span className={`${className} inline-block`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1], // premium custom cubic-bezier
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
