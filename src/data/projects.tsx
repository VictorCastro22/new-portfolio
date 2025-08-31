import netflixImg from '../assets/netflix.jpg';

export interface Project {
  title: string;
  description: string;
  category: 'Análise de Dados' | 'Machine Learning' | 'Engenharia de Dados' | 'Visualização (BI)';
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Dashboard da Netflix',
    description: 'Análise de todos os títulos da Netflix em um dashboard dinâmico no Power BI.',
    category: 'Visualização (BI)',
    imageUrl: netflixImg,
    githubUrl: 'https://github.com/VictorCastro22/analise-netflix-powerbi/tree/main',
    liveUrl: 'https://app.powerbi.com/view?r=eyJrIjoiY2UxMmI3ZmItNmQzNS00MWQxLWIyNTQtZmNmODg3MDgyZGI0IiwidCI6ImY4ZTQzYTgxLTBmNjMtNDhhNi04NWMxLWYzODM4NzRlYjYxZCJ9',
  },
];