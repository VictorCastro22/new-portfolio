import { LinkIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjetosCard({ project }: ProjectCardProps) {
  return (

    <div
      tabIndex={0}
      className="group relative rounded-lg overflow-hidden shadow-lg bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />


      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-300 text-sm mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">
            <FaGithub size={28} />
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">
              <LinkIcon className="h-7 w-7" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}