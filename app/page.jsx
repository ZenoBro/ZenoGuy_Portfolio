"use client";

import { motion } from 'framer-motion';
import HeroSection from '@/components/home/hero-section';
import FeaturedProjects from '@/components/home/featured-projects';
import SkillsOverview from '@/components/home/skills-overview';
import CTASection from '@/components/home/cta-section';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <HeroSection />
      <FeaturedProjects />
      <SkillsOverview />
      <CTASection />
    </motion.div>
  );
}