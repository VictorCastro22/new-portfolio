import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-slate-900 bg-opacity-90 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white tracking-wider">
          <span className="text-cyan-400">Victor</span> Manuel
        </a>


        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">Início</a>
          <a href="#sobre" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">Sobre Mim</a>
          <a href="#projetos" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">Projetos</a>
          <a href="#contato" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">Contato</a>
        </div>


        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-cyan-400 focus:outline-none">
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>
      </div>

  
      {isOpen && (
        <div className="md:hidden bg-slate-800 pb-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#hero" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 w-full text-center py-2">Início</a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 w-full text-center py-2">Sobre Mim</a>
            <a href="#projetos" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 w-full text-center py-2">Projetos</a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 w-full text-center py-2">Contato</a>
          </nav>
        </div>
      )}
    </nav>
  );
}