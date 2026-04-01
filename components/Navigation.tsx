import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PageRoute } from '../types';
import { Menu, X } from 'lucide-react';

const NavItem: React.FC<{ to: string; label: string; onClick?: () => void }> = ({ to, label, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300 py-1 px-2 relative group ${
          isActive
            ? 'text-white'
            : 'text-neutral-500 hover:text-white'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span className={`absolute left-0 bottom-0 h-[1px] bg-white transition-all duration-500 ease-out ${isActive ? 'w-full shadow-[0_0_10px_white]' : 'w-0 group-hover:w-full'}`}></span>
          {label}
        </>
      )}
    </NavLink>
  );
};

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/5 supports-[backdrop-filter]:bg-black/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <NavLink to={PageRoute.HOME} className="text-white font-bold tracking-tighter text-xl font-mono flex items-center gap-2 group">
          <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:shadow-[0_0_15px_white] transition-all duration-500"></div>
          Rattanakpong<span className="text-neutral-700">Portfolio</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12">
          <NavItem to={PageRoute.HOME} label="HOME" />
          <NavItem to={PageRoute.WORK} label="WORK" />
          <NavItem to={PageRoute.PROFILE} label="RESUME" />
          <NavItem to={PageRoute.CONTACT} label="CONTACT" />
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-neutral-500 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
          <NavItem to={PageRoute.HOME} label="HOME" onClick={() => setIsOpen(false)} />
          <NavItem to={PageRoute.WORK} label="WORK" onClick={() => setIsOpen(false)} />
          <NavItem to={PageRoute.PROFILE} label="RESUME" onClick={() => setIsOpen(false)} />
          <NavItem to={PageRoute.CONTACT} label="CONTACT" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
};