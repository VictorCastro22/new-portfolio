import tecnologiaImg from '../assets/tecnologias.png';
import dataScientistIllustration from '../assets/data-scientist-illustration.svg';
import { ChevronDownIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export function Apresentacao() {
  return (
    <section id="hero" className="relative bg-slate-900 min-h-screen flex items-center justify-center p-8 overflow-hidden pt-24 lg:pt-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10">

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0 lg:w-1/2 lg:ml-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            <span className="block text-slate-200">CIÊNCIA DE</span>
            <span className="block text-cyan-500">DADOS</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contato" 
              className="px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-700 transition-colors duration-300"
            >
              Fale Comigo
            </a>
            <a 
              href="/Curriculo-Victor-Castro.pdf"
              download 
              className="px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg shadow-lg hover:border-cyan-500 hover:text-cyan-400 flex items-center justify-center gap-2 transition-colors duration-300"
            >
              Download CV 
              <ArrowDownTrayIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative lg:w-2/5 flex justify-center items-center"> 
          <img 
            src={tecnologiaImg}
            alt="Ilustração de tecnologias de Ciência de Dados" 
            className="w-full max-w-lg lg:max-w-md xl:max-w-lg animate-fade-in -translate-y-8 lg:translate-y-0" 
          />
          <img 
            src={dataScientistIllustration}
            alt="Cientista de Dados trabalhando" 
            className="absolute w-1/3 md:w-1/3 max-w-[180px] lg:w-2/3 lg:max-w-sm bottom-2 lg:-bottom-10 left-1/2 -translate-x-1/2 animate-float-slow" 
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="h-10 w-10 text-slate-400" />
      </div>
    </section>
  );
}