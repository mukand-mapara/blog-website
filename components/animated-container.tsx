"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: any;
  once?: boolean;
}

export function AnimatedContainer({
  children,
  className = "",
  delay = 0,
  variants = fadeInUp,
  once = true,
}: AnimatedContainerProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, isInView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
