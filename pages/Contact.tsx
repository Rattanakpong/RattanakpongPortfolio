import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Monitor } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-center relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 p-8 md:p-24 border-y border-white/10 bg-black/40 backdrop-blur-sm max-w-5xl mx-auto w-full text-center"
      >
        <div className="flex justify-center mb-8">
            <span className="font-mono text-white text-[10px] tracking-[0.4em] uppercase opacity-50">
                :: Get In Touch ::
            </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase mb-8 leading-none mix-blend-difference">
          Contact<br/>Me.
        </h1>
        
        <p className="text-neutral-400 font-light text-lg md:text-xl max-w-xl mx-auto mb-16 leading-relaxed mix-blend-plus-lighter">
          I am currently available for freelance projects and full-time opportunities. 
          Feel free to reach out.
        </p>

        <a 
          href={`mailto:${SOCIAL_LINKS.EMAIL}`}
          className="group inline-block border border-white/20 bg-transparent text-white font-mono font-bold text-sm px-12 py-5 uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 mb-20"
        >
          [ Send Message ]
        </a>

        <div className="flex justify-center gap-12 md:gap-24">
          <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors duration-500">
            <Github size={24} strokeWidth={1} />
          </a>
          <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors duration-500">
            <Linkedin size={24} strokeWidth={1} />
          </a>
          <a href={SOCIAL_LINKS.BEHANCE} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors duration-500">
            <Monitor size={24} strokeWidth={1} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};