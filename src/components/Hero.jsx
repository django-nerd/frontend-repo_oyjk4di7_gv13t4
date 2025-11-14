import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 py-24">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Hi, I’m <span className="text-[#1A73E8]">Fyndra</span> — Web Developer
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 text-lg text-gray-600 max-w-2xl">
            Membangun website cepat, modern, dan siap scale.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white bg-[#1A73E8] hover:bg-[#1765cc] transition-colors shadow-lg shadow-[#1A73E8]/20">Hire Me</a>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-[#1A73E8] border border-[#1A73E8]/30 hover:border-[#1A73E8] transition-colors">Download CV</a>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-gray-700">
            <span className="px-3 py-1 rounded-full bg-gray-100">Frontend</span>
            <span className="px-3 py-1 rounded-full bg-gray-100">Backend</span>
            <span className="px-3 py-1 rounded-full bg-gray-100">Full-Stack</span>
            <span className="px-3 py-1 rounded-full bg-gray-100">Freelancer</span>
          </div>
        </div>

        <div className="lg:col-span-6 hidden lg:block" />
      </div>
    </section>
  );
}
