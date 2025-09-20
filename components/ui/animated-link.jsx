"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AnimatedLink({ 
  href, 
  children, 
  className = "", 
  variant = "default",
  ...props 
}) {
  const variants = {
    default: "relative inline-block overflow-hidden group",
    button: "relative inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md overflow-hidden group hover:bg-primary/90 transition-colors",
    underline: "relative inline-block group"
  };

  const underlineVariants = {
    initial: { scaleX: 0, originX: 0 },
    hover: { scaleX: 1, originX: 0 }
  };

  return (
    <Link 
      href={href} 
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      <motion.span
        className="relative z-10 block"
        whileHover={{ y: variant === "button" ? -2 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.span>
      
      {variant === "underline" && (
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-current"
          variants={underlineVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}
      
      {variant === "button" && (
        <motion.div
          className="absolute inset-0 bg-white/10"
          initial={{ y: "100%" }}
          whileHover={{ y: "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}
    </Link>
  );
}