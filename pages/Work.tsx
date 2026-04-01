import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, X, ArrowRight } from 'lucide-react';
import { Project } from '../types';

export const Work: React.FC = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extract unique categories
  const categories = ['ALL', ...Array.from(new Set(PROJECTS.map(p => p.type)))];

  const filteredProjects = filter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === filter);

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 max-w-7xl mx-auto relative">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase mb-4 mix-blend-difference">Selected Works</h1>
          <p className="font-mono text-neutral-500 text-xs tracking-[0.3em] uppercase">Development & Design Portfolio</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-20 border-b border-white/10 pb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`font-mono text-[10px] tracking-[0.1em] uppercase transition-all duration-300 py-2 px-4 border ${
              filter === category 
                ? 'border-white bg-white text-black' 
                : 'border-transparent text-neutral-500 hover:text-white hover:bg-white/5'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-24">
        <AnimatePresence mode='popLayout'>
        {filteredProjects.map((project, index) => (
          <motion.div 
            layout
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedProject(project)}
            className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900/20 border border-white/5 transition-all duration-500 group-hover:border-white/20">
              <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-60 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              
              {/* Overlay Content */}
              <div className="absolute top-4 left-4 z-20">
                 <span className="font-mono text-[10px] bg-black border border-white/20 text-white px-2 py-1 uppercase tracking-widest">
                    {project.type}
                 </span>
              </div>
            </div>

            {/* Meta Data */}
            <div className="relative">
              <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block group-hover:via-white/50 transition-all duration-500"></div>
              
              <div className="mb-6">
                 <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-white/80 transition-colors">{project.title}</h3>
                 <p className="text-neutral-400 text-sm leading-relaxed max-w-md font-light">
                   {project.description}
                 </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono border border-white/10 px-3 py-1 text-neutral-500 uppercase group-hover:border-white/40 group-hover:text-white transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-white font-mono text-xs uppercase tracking-widest group/btn">
                <span className="border-b border-transparent group-hover:border-white transition-all">View Details</span>
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 max-w-6xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl"
            >
              {/* Left/Top: Image */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative bg-neutral-900 border-b md:border-b-0 md:border-r border-white/10 group">
                 <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right/Bottom: Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 relative flex flex-col">
                 <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors"
                 >
                   <X size={24} />
                 </button>

                 <span className="font-mono text-neutral-400 text-xs tracking-widest uppercase mb-4 block">
                   {selectedProject.type}
                 </span>
                 
                 <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase mb-8">
                   {selectedProject.title}
                 </h2>

                 <div className="mb-8 space-y-4">
                    <p className="text-neutral-300 font-light leading-relaxed">
                      {selectedProject.description}
                    </p>
                 </div>

                 <div className="mb-12">
                   <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">Rattanakpong</h3>
                   <div className="flex flex-wrap gap-2">
                     {selectedProject.tags.map(tag => (
                       <span key={tag} className="text-xs font-mono border border-white/10 bg-white/5 px-3 py-1.5 text-neutral-300">
                         {tag}
                       </span>
                     ))}
                   </div>
                 </div>

                 <div className="mt-auto pt-8 border-t border-white/10">
                    <a 
                      href={selectedProject.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-black font-mono font-bold text-sm px-8 py-4 uppercase tracking-widest hover:bg-neutral-200 transition-colors w-full justify-center md:w-auto"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink size={16} />
                    </a>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};