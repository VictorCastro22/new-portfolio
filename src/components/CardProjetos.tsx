import { useState } from 'react';
import { LinkIcon, PlusIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjetosCard({ project }: ProjectCardProps) {

  const [isOpen, setIsOpen] = useState(false);


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div
      onClick={handleToggle}
      className="group relative rounded-lg overflow-hidden shadow-lg bg-slate-800 cursor-pointer"
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />


      <div 
        className={`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center 
          ${isOpen ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`
        }
      >
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-300 text-sm mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={28} />
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <LinkIcon className="h-7 w-7" />
            </a>
          )}
        </div>
      </div>

      <div 
        className={`absolute bottom-4 right-4 bg-cyan-500 text-white rounded-full p-2 shadow-lg transform transition-transform duration-300 group-hover:rotate-45 
          ${isOpen ? 'rotate-45' : 'rotate-0'}`
        }
      >
        <PlusIcon className="h-6 w-6" />
      </div>
      
    </div>
  );
}