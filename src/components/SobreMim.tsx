import { BriefcaseIcon, AcademicCapIcon, CheckBadgeIcon, LinkIcon } from '@heroicons/react/24/solid';


const skills = [
  { name: 'Python', percentage: '90%' },   
  { name: 'SQL', percentage: '80%' },        
  { name: 'Pandas', percentage: '80%' }, 
  { name: 'Numpy', percentage: '60%' }, 
  { name: 'Estatística', percentage: '60%' }, 
  { name: 'Power BI', percentage: '90%' },    
  { name: 'DAX', percentage: '80%' },        
  { name: 'Excel', percentage: '90%' },        
  { name: 'Git & Github', percentage: '80%' },
  { name: 'Scrum', percentage: '100%' },      
];

const trabalhoLinhadoTempo = [
  {
    role: 'Estagiário em Ciência de Dados',
    company: 'Cookie Mania',
    location: 'Ceará, Fortaleza',
    period: 'Fev de 2024 - Fev de 2025',
  },
  {
    role: 'Bolsista em Ciência de Dados',
    company: 'LASIC',
    location: 'IFCE, Campus Maracanaú',
    period: 'Fev de 2023 - Fev de 2024',
  },
];

const formacaoAcademica = [
  {
    curso: 'Bacharelado em Ciência da Computação',
    instituicao: 'IFCE - Campus Maracanaú',
    periodo: 'Mar de 2022 - Previsão 1º semestre de 2027',
  },
];

const cursos = [
  {
    nome: 'Iniciante em Programação',
    instituicao: 'Alura',
    linkCertificado: 'https://cursos.alura.com.br/degree/certificate/5d3c454a-86b2-48f3-921c-1f396cb9b36f',
  },
  {
    nome: 'Desenvolvimento Pessoal',
    instituicao: 'Alura',
    linkCertificado: 'https://cursos.alura.com.br/degree/certificate/ef7f89cc-b149-40d6-a0a8-033780cbaf19',
  },
  {
    nome: 'Excel',
    instituicao: 'Planilheiros',
  },
]


export function SobreMim() {
  return (
    <section id="sobre" className="bg-slate-800 py-20 px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Sobre Mim</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-semibold text-white mb-4">Visão Geral</h3>
            <p className="text-slate-400 leading-relaxed mb-12">
              Como cientista de dados, minha paixão é transformar dados brutos em insights acionáveis que impulsionam decisões estratégicas. 
              Com uma base sólida em engenharia de software e estatística, busco resolver problemas de negócio complexos, desde a 
              extração e modelagem de dados até a criação de modelos de machine learning. Minha abordagem combina rigor técnico 
              com uma comunicação clara, garantindo que as soluções não apenas funcionem, mas também agreguem valor real e compreensível 
              para a empresa.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-6">Experiência Profissional</h3>
            <div className="relative border-l-2 border-slate-700 pl-8 space-y-10">
              {trabalhoLinhadoTempo.map((job, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[42px] top-1 h-6 w-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <BriefcaseIcon className="h-4 w-4 text-slate-900" />
                  </div>
                  <h4 className="font-bold text-lg text-white">{job.role}</h4>
                  <p className="text-slate-400">{job.company} - {job.location}</p>
                  <p className="text-slate-500 text-sm mt-1">{job.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-4">Minhas Habilidades</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-cyan-400 text-sm font-medium">{skill.percentage}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div 
                      className="bg-cyan-500 h-2.5 rounded-full" 
                      style={{ width: skill.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Nova estrutura com seções separadas */}
        <div className="mt-20">
          {/* Seção de Formação Acadêmica */}
          <div className='mb-16'>
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Formação Acadêmica</h3>
            <div className="relative border-l-2 border-slate-700 mx-auto max-w-2xl pl-8 space-y-10">
              {formacaoAcademica.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[42px] top-1 h-6 w-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <AcademicCapIcon className="h-4 w-4 text-slate-900" />
                  </div>
                  <h4 className="font-bold text-lg text-white">{edu.instituicao}</h4>
                  <p className="text-slate-400">{edu.curso}</p>
                  <p className="text-slate-500 text-sm mt-1">{edu.periodo}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Seção de Cursos e Certificações */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Cursos e Certificações</h3>
            <div className="relative border-l-2 border-slate-700 mx-auto max-w-2xl pl-8 space-y-10">
              {cursos.map((curso, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[42px] top-1 h-6 w-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <CheckBadgeIcon className="h-4 w-4 text-slate-900" />
                  </div>
                  <h4 className="font-bold text-lg text-white">{curso.nome}</h4>
                  <p className="text-slate-400 mb-2">{curso.instituicao}</p>
                  {/* Link do certificado só aparece se ele existir nos dados */}
                  {curso.linkCertificado && (
                    <a 
                      href={curso.linkCertificado}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      <LinkIcon className="h-4 w-4" />
                      Ver Certificado
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}