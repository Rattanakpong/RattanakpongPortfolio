import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';
import { ArrowRight, Satellite, Rocket, Telescope, Hexagon } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
  visible: { 
    y: 0, 
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export const Home: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-32 pb-12 px-6 max-w-7xl mx-auto"
    >
      {/* Hero Section */}
      <section className="mb-48 relative z-10 flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Profile Picture */}
        <motion.div variants={itemVariants} className="md:order-2 flex-shrink-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 p-2 bg-black/20 backdrop-blur-sm">
            <div className="w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="/1A0A5939.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse-slow"></div>
          </div>
        </motion.div>

        <div className="md:order-1 flex-1">
          <motion.div variants={itemVariants} className="mb-8">
            <span className="font-mono text-neutral-500 text-[10px] tracking-[0.4em] uppercase border-l border-neutral-700 pl-3">
              Available for Hire
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9] mix-blend-difference">
            DESIGN,<br />
            <span className="text-neutral-600">DEVELOPER.</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-lg md:text-xl font-mono text-neutral-500 mb-12 max-w-2xl pl-1">
            FULL STACK DEVELOPER & GRAPHIC DESIGN.
            <br/>
            <span className="text-neutral-700 text-sm mt-2 block tracking-widest">BUILDING SCALABLE DIGITAL SOLUTIONS</span>
          </motion.h2>

          <motion.div variants={itemVariants}>
            <Link 
              to={PageRoute.WORK} 
              className="group inline-flex items-center gap-6 text-white font-mono font-bold text-sm uppercase tracking-[0.2em] transition-all hover:text-neutral-400"
            >
              <span className="border-b border-white pb-1 group-hover:border-neutral-400 transition-colors">View Projects</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" strokeWidth={1} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Systems Section */}
      <section className="grid md:grid-cols-2 gap-24 mb-40 border-t border-white/10 pt-20 relative">
        <motion.div variants={itemVariants}>
          <h3 className="font-mono text-neutral-600 text-[10px] mb-8 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-1 h-1 bg-white rounded-full"></span>
            About Me
          </h3>
          <p className="text-2xl md:text-3xl leading-normal text-neutral-300 font-light mix-blend-plus-lighter">
            I am a FULL STACK DEVELOPER specialized in building web applications. I combine technical expertise in React and TypeScript with a strong eye for UI/UX design.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="backdrop-blur-sm bg-white/[0.02] p-8 border border-white/5 hover:border-white/10 transition-colors duration-500">
           <h3 className="font-mono text-neutral-600 text-[10px] mb-8 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-1 h-1 bg-white rounded-full"></span>
            Core Competencies
           </h3>
           <ul className="space-y-6 font-mono text-sm text-neutral-400">
             <li className="flex items-center gap-4 group cursor-default">
               <span className="w-px h-4 bg-neutral-800 group-hover:bg-white transition-colors duration-500"></span>
               FULL STACK DEVELOPER
             </li>
             <li className="flex items-center gap-4 group cursor-default">
               <span className="w-px h-4 bg-neutral-800 group-hover:bg-white transition-colors duration-500"></span>
               GRAPHIC DESIGN
             </li>
             <li className="flex items-center gap-4 group cursor-default">
               <span className="w-px h-4 bg-neutral-800 group-hover:bg-white transition-colors duration-500"></span>
               TEAM LEAD
             </li>
             <li className="flex items-center gap-4 group cursor-default">
               <span className="w-px h-4 bg-neutral-800 group-hover:bg-white transition-colors duration-500"></span>
               CUSTOMER SUPPORT
             </li>
           </ul>
        </motion.div>
      </section>

      {/* Expertise Grid */}
      <section>
        <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-4">
          <h3 className="font-mono text-neutral-600 text-[10px] uppercase tracking-[0.3em]">Services</h3>
          <span className="font-mono text-[10px] text-neutral-800">AVAILABLE 2026</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {[
            { Icon: Rocket, title: "WEB DEV", desc: "Scalable React applications & dashboards." },
            { Icon: Hexagon, title: "DESIGN", desc: "User interfaces & brand identity." },
            { Icon: Telescope, title: "SUPPORT", desc: "Technical support." },
            { Icon: Satellite, title: "LEAD", desc: "Support & Advisor  on Projects" }
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants} className="bg-transparent p-8 hover:bg-white/[0.03] transition-colors duration-500 group">
              <item.Icon className="mb-8 text-neutral-700 group-hover:text-white transition-colors duration-500" size={24} strokeWidth={1} />
              <h4 className="font-bold mb-4 text-white tracking-widest text-sm">{item.title}</h4>
              <p className="text-neutral-500 text-xs font-mono leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
