"use client";

import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Palette, 
  Zap,
  Monitor,
  Server,
  Wrench,
  BookOpen 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'text-blue-500'
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
    color: 'text-green-500'
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'],
    color: 'text-purple-500'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    color: 'text-orange-500'
  },
  {
    title: 'Design & UI/UX',
    icon: Palette,
    skills: ['Figma', 'Adobe XD', 'Photoshop', 'User Research', 'Prototyping'],
    color: 'text-pink-500'
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    skills: ['Git', 'VS Code', 'Postman', 'Jira', 'Slack'],
    color: 'text-gray-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function SkillsOverview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I work with a diverse range of technologies and tools to create exceptional digital experiences.
            Here's an overview of my technical expertise.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="h-full p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg bg-primary/10 ${category.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    className="mt-4 h-1 bg-primary/20 rounded-full overflow-hidden"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                  >
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">
              Always learning new technologies and staying up-to-date with industry trends
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}