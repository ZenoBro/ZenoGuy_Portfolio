"use client";

import { motion } from 'framer-motion';
import PageWrapper from '@/components/layout/page-wrapper';
import ScrollReveal from '@/components/ui/scroll-reveal';
import AnimatedLink from '@/components/ui/animated-link';


export default function Home() {
  return (
    <PageWrapper namespace="home">
      <div data-scroll-section>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Welcome to
                <br />
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Smooth Transitions
                </span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience buttery smooth page transitions and scroll animations 
                inspired by modern web design principles.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedLink href="/about" variant="button">
                  Explore About
                </AnimatedLink>
                <AnimatedLink href="/contact" variant="underline" className="text-lg">
                  Get in Touch
                </AnimatedLink>
              </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 bg-muted/30" data-scroll data-scroll-speed="0.5">
          <div className="max-w-6xl mx-auto px-4">
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
                Smooth Experience Features
              </h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal direction="up" delay={0.3}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Page Transitions</h3>
                  <p className="text-muted-foreground">
                    Smooth sliding transitions between pages using Barba.js and GSAP
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.4}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smooth Scrolling</h3>
                  <p className="text-muted-foreground">
                    Locomotive Scroll provides buttery smooth scrolling experience
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.5}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Scroll Animations</h3>
                  <p className="text-muted-foreground">
                    Elements animate into view as you scroll through the page
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}