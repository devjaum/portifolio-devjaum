import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code, Server, Database, Terminal, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dados extraídos do Currículo
  const personalInfo = {
    name: "João Carlos de Campos Neto",
    role: "Desenvolvedor Júnior | React & Node.js",
    location: "Santana de Parnaíba - SP",
    email: "joao.camposcn@gmail.com",
    github: "https://github.com/devjaum",
    phone: "(11) 96308-2513"
  };

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind"],
    backend: ["Node.js", "Express", "TypeORM", "WebSocket (Socket.IO)"],
    database: ["PostgreSQL", "MySQL", "SQL Server"],
    tools: ["Git", "GitHub", "VS Code", "Metodologias Ágeis"]
  };

  const projects = [
    {
      title: "Chat Online (Realtime)",
      description: "Aplicação Full Stack de chat em tempo real. Interface reativa e comunicação bidirecional.",
      tech: ["React", "Node.js", "Express", "Socket.IO"],
      link: "https://github.com/devjaum/Chat", // Link sugerido baseado no padrão
      type: "Full Stack"
    },
    {
      title: "TaskList (Gerenciador de Tarefas)",
      description: "Aplicação web SPA para organização de produtividade pessoal com foco em UX.",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://github.com/devjaum/TaskList",
      type: "Frontend"
    }
  ];

  const experience = [
    {
      company: "Prefeitura de Santana de Parnaíba",
      role: "Estagiário de Suporte Técnico",
      period: "2020 - 2021",
      description: "Suporte técnico (Help Desk) e treinamento de novos funcionários em sistemas internos."
    },
    {
      company: "FYTERM",
      role: "Jovem Aprendiz (Administrativo)",
      period: "2016",
      description: "Rotina administrativa, atendimento ao público e elaboração de relatórios."
    }
  ];

  const education = [
    {
      school: "IMPACTA",
      course: "Engenharia da Computação",
      status: "Cursando"
    },
    {
      school: "FATEC / Etec Bartolomeu",
      course: "Técnico em Contabilidade",
      status: "Concluído (2019)"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Navegação */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-teal-400">&lt;DevJaum /&gt;</span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Sobre', 'Habilidades', 'Projetos', 'Experiência'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-teal-400 transition-colors cursor-pointer">
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 p-4">
            {['Sobre', 'Habilidades', 'Projetos', 'Experiência'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-slate-300 hover:text-teal-400"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-teal-400 font-medium text-lg">Olá, eu sou</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xl text-slate-400 max-w-lg">
            {personalInfo.role}
          </p>
          <div className="flex space-x-4 pt-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-teal-600 hover:text-white transition-all">
              <Github size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-2 bg-slate-800 rounded-full hover:bg-teal-600 hover:text-white transition-all">
              <Mail size={24} />
            </a>
          </div>
          <div className="flex items-center text-sm text-slate-500 pt-2">
            <MapPin size={16} className="mr-2" /> {personalInfo.location}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="text-teal-400 mr-2">01.</span> Sobre Mim
          </h2>
          <div className="bg-slate-800 p-8 rounded-lg shadow-xl border border-slate-700">
            <p className="text-lg text-slate-300 leading-relaxed">
              Meu objetivo é atuar como <strong className="text-teal-400">Desenvolvedor Júnior</strong>, 
              aplicando competências em React, Node.js e JavaScript. Foco no desenvolvimento 
              de soluções de software escaláveis e interfaces responsivas, colaborando ativamente 
              com equipes de engenharia para agregar valor aos produtos.
            </p>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="text-teal-400 mr-2">02.</span> Tecnologias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard title="Frontend" icon={<Code />} skills={skills.frontend} />
          <SkillCard title="Backend" icon={<Server />} skills={skills.backend} />
          <SkillCard title="Banco de Dados" icon={<Database />} skills={skills.database} />
          <SkillCard title="Ferramentas" icon={<Terminal />} skills={skills.tools} />
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
            <span className="text-teal-400 mr-2">03.</span> Projetos Pessoais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-teal-500 transition-all hover:-translate-y-1 group">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-teal-400 text-sm font-mono">{project.type}</div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-teal-300 bg-teal-900/30 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiência e Educação */}
      <section id="experiência" className="py-20 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="text-teal-400 mr-2">04.</span> Trajetória
        </h2>
        
        <div className="space-y-12">
          {/* Profissional */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 border-l-4 border-teal-500 pl-4">Experiência Profissional</h3>
            <div className="space-y-8 border-l border-slate-800 ml-2 pl-8 relative">
              {experience.map((job, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-700 border-2 border-slate-900"></div>
                  <h4 className="text-lg font-bold text-slate-200">{job.role}</h4>
                  <p className="text-teal-400 text-sm mb-2">{job.company} | {job.period}</p>
                  <p className="text-slate-400 text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Educação */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 border-l-4 border-teal-500 pl-4">Formação Acadêmica</h3>
            <div className="grid gap-4">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-slate-800 p-4 rounded border border-slate-700 flex justify-between items-center">
                  <div>
                    <h4 className="text-white font-medium">{edu.course}</h4>
                    <p className="text-slate-400 text-sm">{edu.school}</p>
                  </div>
                  <span className="text-xs font-mono text-teal-300 bg-teal-900/20 px-2 py-1 rounded">
                    {edu.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm">
        <p>Desenvolvido por João Carlos de Campos Neto</p>
        <p className="mt-2">Construído com React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

// Componente Auxiliar para Cards de Habilidade
const SkillCard = ({ title, icon, skills }) => (
  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-teal-500/50 transition-colors">
    <div className="text-teal-400 mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map(skill => (
        <li key={skill} className="text-slate-400 text-sm flex items-center">
          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Portfolio;