import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-black/20 backdrop-blur-sm py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-neutral-600">
        <div className="flex items-center gap-4">
          <span className="tracking-widest uppercase">Portfolio</span>
          <span className="hidden md:inline text-neutral-800">|</span>
          <span className="hidden md:inline">2026 EDITION</span>
        </div>
        <div className="mt-4 md:mt-0 uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
          © 2026. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};