"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeListItemProps = {
  className?: string;
  delay?: number;
  children: ReactNode;
};

export function FadeListItem({
  className,
  delay = 0,
  children,
}: FadeListItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        transition: { 
          delay,
          duration: 0.6 
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
