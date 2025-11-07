'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen bg-darker">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #5E17EB 0%, transparent 70%)',
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
          }}
          animate={{
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(94,23,235,0.1),transparent_50%)]" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-50 px-8 py-6 flex justify-between items-center max-w-7xl mx-auto"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold text-gradient cursor-pointer"
        >
          Atlaze
        </motion.div>
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-primary hover:bg-secondary rounded-full font-semibold glow-effect transition-all"
        >
          Get Started
        </motion.button>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 px-8 pt-20 pb-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block mb-6 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium"
          >
            Digital Excellence Redefined
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Transform Your</span>
            <br />
            <span className="text-gradient">Digital Presence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto"
          >
            Analyse. Act. Achieve.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            We craft data-driven digital experiences that propel forward-thinking businesses into the future
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(94, 23, 235, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary hover:bg-secondary rounded-full font-semibold text-lg glow-effect transition-all"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary/50 hover:border-primary rounded-full font-semibold text-lg transition-all"
            >
              View Our Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32"
        >
          {[
            { number: '200+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Team Members' },
            { number: '15+', label: 'Years Experience' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-dark/50 border border-primary/20 card-glow"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Brand Strategy',
              description: 'Data-driven insights to position your brand for maximum impact',
              icon: '📊',
            },
            {
              title: 'Web Development',
              description: 'Cutting-edge websites built for performance and scalability',
              icon: '💻',
            },
            {
              title: 'Digital Marketing',
              description: 'Strategic campaigns that drive measurable results',
              icon: '🚀',
            },
            {
              title: 'UX/UI Design',
              description: 'Beautiful, intuitive interfaces that users love',
              icon: '🎨',
            },
            {
              title: 'Analytics & Insights',
              description: 'Transform data into actionable business intelligence',
              icon: '📈',
            },
            {
              title: 'Consulting',
              description: 'Expert guidance to navigate your digital transformation',
              icon: '💡',
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 12px 40px rgba(94, 23, 235, 0.25)' }}
              className="p-8 rounded-2xl bg-dark/70 border border-primary/20 backdrop-blur-sm cursor-pointer transition-all"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 hidden lg:block" />

          {[
            {
              step: '01',
              title: 'Analyse',
              description: 'Deep dive into your business, market, and audience to uncover opportunities',
            },
            {
              step: '02',
              title: 'Act',
              description: 'Execute strategic initiatives with precision and agility',
            },
            {
              step: '03',
              title: 'Achieve',
              description: 'Deliver measurable results that exceed expectations',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`relative mb-16 lg:mb-24 flex flex-col lg:flex-row items-center ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-8 rounded-2xl bg-dark/70 border border-primary/20 backdrop-blur-sm card-glow"
                >
                  <div className="text-6xl font-bold text-gradient mb-4">{item.step}</div>
                  <h3 className="text-3xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                </motion.div>
              </div>

              <div className="hidden lg:block w-12 h-12 rounded-full bg-primary glow-effect z-10 absolute left-1/2 transform -translate-x-1/2" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #5E17EB 0%, #6F2FEE 100%)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Ready to Transform?
            </h2>
            <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
              Let's build something extraordinary together. Start your journey with Atlaze today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-16 border-t border-primary/20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-3xl font-bold text-gradient">Atlaze</div>
          <div className="flex gap-8 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-gray-500">
            © 2024 Atlaze. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
