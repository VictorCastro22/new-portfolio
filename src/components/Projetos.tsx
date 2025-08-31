import { useState } from 'react';
import { projects } from '../data/projects';
import { ProjetosCard } from './CardProjetos';

const projectCategories = ['Todos', 'Análise de Dados', 'Machine Learning', 'Engenharia de Dados', 'Visualização (BI)'];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projetos" className="bg-slate-900 py-20 px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Meus Projetos</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Aqui estão alguns dos projetos em que trabalhei, demonstrando minhas habilidades em diversas áreas da Ciência de Dados.
        </p>

        
        <div className="flex items-center overflow-x-auto space-x-4 mb-12 pb-4 scrollbar-hide">
          {projectCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
           
              className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 flex-shrink-0 
                ${activeFilter === category 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjetosCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}