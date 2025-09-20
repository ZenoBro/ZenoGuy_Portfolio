"use client";

import { motion } from 'framer-motion';
import { Download, Heart, Coffee, Code, Gamepad2, Music, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const interests = [
  { name: 'Coding', icon: Code, description: 'Building amazing things with code' },
  { name: 'Gaming', icon: Gamepad2, description: 'Strategy games and indie titles' },
  { name: 'Music', icon: Music, description: 'Electronic and ambient music' },
  { name: 'Photography', icon: Camera, description: 'Capturing moments and landscapes' },
];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AboutPage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm Shreyan Ghosh, a passionate Full-Stack Developer and Creative Technologist 
              with over 3 years of experience in building exceptional digital experiences.
            </p>
            <Button size="lg" className="group">
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-3xl opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-blue-600/20 p-2">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-8xl font-bold text-primary">
                    SG
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* My Story Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">My Story</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  My journey into technology began during my college years when I first encountered 
                  programming. What started as curiosity quickly became a passion as I discovered 
                  the power of code to solve real-world problems and create meaningful experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Over the years, I've had the privilege of working with startups and established 
                  companies, helping them build scalable web applications, optimize user experiences, 
                  and implement cutting-edge technologies.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I believe in continuous learning and staying ahead of technology trends. 
                  Whether it's exploring new frameworks, contributing to open-source projects, 
                  or mentoring upcoming developers, I'm always looking for ways to grow and give back.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring photography, playing strategic games, 
                  or experimenting with new technologies that could shape the future of web development.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Current Focus */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Current Focus</h2>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-blue-600/5 border-primary/20">
            <CardContent className="space-y-6 p-0">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Full-Stack Development</h3>
                  <p className="text-muted-foreground text-sm">
                    Building end-to-end solutions with modern technologies like Next.js, Node.js, and cloud platforms.
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">User Experience</h3>
                  <p className="text-muted-foreground text-sm">
                    Creating intuitive and accessible interfaces that users love to interact with.
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Coffee className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Mentorship</h3>
                  <p className="text-muted-foreground text-sm">
                    Helping aspiring developers learn and grow through code reviews and technical guidance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Beyond Code */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Beyond Code</h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="p-0 text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{interest.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {interest.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
}