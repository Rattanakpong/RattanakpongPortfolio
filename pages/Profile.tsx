import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, SKILLS, CREDENTIALS } from '../constants';
import { Cpu, Activity, GraduationCap, ExternalLink } from 'lucide-react';

export const Profile: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-20 border-b border-white/10 pb-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-4">Curriculum Vitae</h1>
          <p className="font-mono text-neutral-500 text-xs tracking-[0.3em]">CAREER HISTORY & QUALIFICATIONS</p>
        </div>
        
        {/* Profile Picture in Header */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 p-1 bg-black/50 backdrop-blur-sm flex-shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img 
                src="1A0A5941.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover object-top"
              />
            </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        
        {/* Left Column: Skills (The Tech Stack) */}
        <div className="lg:col-span-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32"
          >
            <div className="flex items-center gap-3 mb-8">
                <Cpu className="text-white" size={16} strokeWidth={1}/>
                <h2 className="font-mono text-white text-xs uppercase tracking-[0.2em]">Technical Proficiency</h2>
            </div>
            
            <div className="space-y-4">
              {SKILLS.map((skillGroup, i) => (
                <div key={i} className="bg-black/40 backdrop-blur-md border border-white/5 p-6 hover:border-white/20 transition-colors duration-500">
                  <h3 className="font-bold text-neutral-400 text-[10px] mb-4 uppercase tracking-[0.2em] flex items-center gap-2">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => (
                      <span key={skill} className="font-mono text-[10px] border border-white/5 bg-white/5 px-2 py-1 text-neutral-300 hover:bg-white hover:text-black transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education Box */}
            <div className="mt-8 border border-white/5 p-6 bg-black/40 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                 <GraduationCap className="text-white" size={16} strokeWidth={1}/>
                 <h3 className="font-mono text-white text-xs uppercase tracking-[0.2em]">Education & Credentials</h3>
              </div>
              <div className="space-y-6">
                 {CREDENTIALS.map((cred) => (
                   <div key={cred.id} className="group">
                      {cred.link ? (
                        <a href={cred.link} target="_blank" rel="noopener noreferrer" className="block">
                          <div className="text-white font-bold text-sm group-hover:text-cyan-200 transition-colors flex items-center gap-2">
                              {cred.title}
                              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-500" />
                          </div>
                          <div className="text-neutral-500 text-[10px] font-mono mt-1 uppercase group-hover:text-neutral-400 transition-colors">
                            {cred.institution} • {cred.date}
                          </div>
                        </a>
                      ) : (
                        <>
                          <div className="text-white font-bold text-sm">{cred.title}</div>
                          <div className="text-neutral-500 text-[10px] font-mono mt-1 uppercase">
                            {cred.institution} • {cred.date}
                          </div>
                        </>
                      )}
                      <div className="w-full h-px bg-white/5 mt-4 group-last:hidden"></div>
                   </div>
                 ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Right Column: Experience (Timeline) */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
             <div className="flex items-center gap-3 mb-12">
                <Activity className="text-white" size={16} strokeWidth={1}/>
                <h2 className="font-mono text-white text-xs uppercase tracking-[0.2em]">Professional Experience</h2>
            </div>

             <div className="relative pl-4 md:pl-0 border-l border-white/5 md:border-l-0">
                <div className="space-y-24">
                  {EXPERIENCE.map((job) => (
                    <div key={job.id} className="relative flex flex-col md:flex-row gap-6 md:gap-16 group">
                      
                      {/* Date (Left Side) */}
                      <div className="md:w-[180px] flex-shrink-0 md:text-right">
                        <span className="font-mono text-xs text-white/60 block mb-1">
                          {job.date}
                        </span>
                        <div className="w-8 h-px bg-white/20 md:ml-auto"></div>
                      </div>

                      {/* Content (Right Side) */}
                      <div className="flex-grow">
                         {/* Description */}
                        <div className="relative"> 
                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-1 group-hover:text-cyan-200 transition-colors">{job.role}</h3>
                            
                            <h4 className="text-neutral-500 font-mono text-xs mb-4 uppercase tracking-wider">
                                {job.companyLink ? (
                                    <a href={job.companyLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 w-fit">
                                        {job.company}
                                        <ExternalLink size={10} />
                                    </a>
                                ) : job.company}
                            </h4>

                            <p className="text-neutral-400 font-light leading-relaxed max-w-2xl">
                            {job.description}
                            </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};