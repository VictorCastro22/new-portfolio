import { HomeIcon, UserIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-slate-800 border-t border-slate-700 pt-16 pb-8 px-8">
      <div className="container mx-auto text-center text-slate-400">
        <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 mb-8">
          <a href="#hero" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <HomeIcon className="h-5 w-5" />
            <span>Início</span>
          </a>
          <a href="#sobre" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <UserIcon className="h-5 w-5" />
            <span>Sobre Mim</span>
          </a>
          <a href="mailto:victor3mcastro@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <EnvelopeIcon className="h-5 w-5" />
            <span>Contato</span>
          </a>
        </div>
        <div className="flex justify-center items-center space-x-6 mb-8">
          <a href="https://github.com/VictorCastro22" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <FaGithub className="h-7 w-7 text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/victormanuel-bi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <FaLinkedin className="h-7 w-7 text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110" />
          </a>
        </div>
        <hr className="border-slate-700 w-full max-w-md mx-auto mb-8" />
        <p className="text-sm">
          &copy; {currentYear} Victor Castro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}