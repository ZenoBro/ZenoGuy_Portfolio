"use client";

import { motion } from 'framer-motion';
import PageWrapper from '@/components/layout/page-wrapper';
import ScrollReveal from '@/components/ui/scroll-reveal';
import AnimatedLink from '@/components/ui/animated-link';





export default function AboutPage() {
  return (




    <PageWrapper namespace="about">
      <div data-scroll-section className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="about-content text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-primary">Our Vision</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <p className="about-content text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We believe in creating digital experiences that feel natural, smooth, and delightful. 
                Our approach combines cutting-edge technology with thoughtful design principles.
              </p>
          {/* Story Section */}
          <section className="mb-20" data-scroll data-scroll-speed="0.5">
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl font-bold mb-12 text-center">Our Story</h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <ScrollReveal direction="left" delay={0.3}>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    The journey began with a simple observation: most websites feel clunky and disconnected. 
                    Users expect smooth, app-like experiences that respond naturally to their interactions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We set out to bridge this gap by combining the best of modern web technologies 
                    with animation principles borrowed from motion design and native applications.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.4}>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we continue to push the boundaries of what's possible on the web, 
                    creating experiences that feel magical yet remain accessible and performant.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every transition, every animation, every interaction is carefully crafted 
                    to enhance the user's journey through digital spaces.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>
            </ScrollReveal>
          {/* Values Section */}
          <section className="mb-20">
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal direction="up" delay={0.3}>
                <div className="text-center p-6 rounded-lg bg-card border">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Performance</h3>
                  <p className="text-muted-foreground">
                    Beautiful animations should never come at the cost of performance. 
                    We optimize every interaction for speed and efficiency.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.4}>
                <div className="text-center p-6 rounded-lg bg-card border">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Design</h3>
                  <p className="text-muted-foreground">
                    Every element is thoughtfully designed to create cohesive, 
                    visually appealing experiences that users love.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.5}>
                <div className="text-center p-6 rounded-lg bg-card border">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">♿</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                  <p className="text-muted-foreground">
                    Beautiful experiences should be available to everyone. 
                    We build with accessibility in mind from the ground up.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>
          </div>
          {/* CTA Section */}
          <section className="text-center">
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl font-bold mb-6">Ready to Experience Smooth?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Get in touch to discuss your next project.
              </p>
              <AnimatedLink href="/contact" variant="button" className="text-lg">
                Start a Conversation
              </AnimatedLink>
            </ScrollReveal>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}