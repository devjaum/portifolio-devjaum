import React from 'react';
import './App.css';
import { 
  MapPin, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Award, 
  Briefcase, 
  Calendar, 
  FolderGit2, 
  CheckCircle2,
  Layers
} from 'lucide-react';

const App = () => {
  return (
    <div className="container">
      {/* Sidebar Fixa */}
      <aside className="profile-section">
        <div className="profile-content">
          <div className="avatar-placeholder">
            <img src="avatar.jpg" alt="João Carlos de Campos Neto" style={
              {width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center'
              }
            }/>
            
          </div>
          
          <h1>João Carlos de Campos Neto</h1>
          <h2>Desenvolvedor Full Stack & <br/>Estudante de Eng. da Computação</h2>
          
          <div className="location">
            <MapPin size={16} />
            <span>Santana de Parnaíba - SP</span>
          </div>

          <p className="bio">
            Focado em criar soluções escaláveis. Atualmente especializando-me em 
            <strong> Java</strong>, arquitetura de software e sistemas distribuídos.
          </p>
          
          <div className="social-links">
            <a href="https://github.com/devjaum" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              <span>/devjaum</span>
            </a>
            <a href="mailto:joao.camposcn@gmail.com">
              <Mail size={20} />
              <span>joao.camposcn@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/devjaum/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="tech-stack-mini">
            <TechBadge icon={<Code2 size={14} />} label="Java" />
            <TechBadge icon={<Layers size={14} />} label="React" />
            <TechBadge icon={<Terminal size={14} />} label="Node.js" />
            <TechBadge icon={<Cpu size={14} />} label="Docker" />
          </div>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="main-content">
        
        {/* Certificações */}
        <section id="certifications">
          <h3 className="section-title">
            <Award size={18} />
            Certificações Recentes
          </h3>
          <div className="cert-list">
            <CertItem 
              title="Java: Trabalhando com listas e coleções" 
              date="19 jan, 2026" 
              school="Alura"
            />
            <CertItem 
              title="Java: Aplicando a Orientação a Objetos" 
              date="08 jan, 2026" 
              school="Alura"
            />
            <CertItem 
              title="Fundamentos da Computação" 
              date="05 jan, 2026" 
              school="Alura"
            />
            <CertItem 
              title="Desenvolvimento Back-End Java" 
              date="05 jan, 2026" 
              school="Alura"
            />
          </div>
        </section>

        {/* Projetos */}
        <section id="projects">
          <h3 className="section-title">
            <FolderGit2 size={18} />
            Projetos Selecionados
          </h3>
          <div className="project-grid">
            
            <ProjectCard 
              title="Finanças Pessoais" 
              desc="Aplicação de controle financeiro com foco em organização e UX refinada." 
              link="https://github.com/devjaum/financas"
              tags={['React', 'Front-end']}
            />

            <ProjectCard 
              title="OS Hub" 
              desc="Hub de integração de sistemas e utilitários para produtividade." 
              link="https://github.com/devjaum/os-hub"
              tags={['System', 'Integration']}
            />

            <ProjectCard 
              title="Redes Neurais" 
              desc="Implementação de algoritmos de redes neurais artificiais em baixo nível." 
              link="https://github.com/devjaum/Rede-neural"
              tags={['AI', 'Computer Science']}
            />

            <ProjectCard 
              title="Criptografia" 
              desc="Estudos aplicados de algoritmos de segurança e criptografia moderna." 
              link="https://github.com/devjaum/Criptografia"
              tags={['Security', 'Java']}
            />

            <ProjectCard 
              title="Chat Realtime" 
              desc="Sistema de chat bidirecional utilizando WebSockets e arquitetura de eventos." 
              link="https://github.com/devjaum/frontend" 
              tags={['Node.js', 'Socket.io']}
            />

            <ProjectCard 
              title="TaskList" 
              desc="Gerenciador de tarefas SPA com gerenciamento de estado complexo." 
              link="https://github.com/devjaum/tasklist-react"
              tags={['React', 'SPA']}
            />

          </div>
        </section>

        {/* Experiência */}
        <section id="experience">
          <h3 className="section-title">
            <Briefcase size={18} />
            Experiência
          </h3>
          <div className="timeline">
            <ExperienceItem 
              role="Estagiário (Help Desk)"
              company="Prefeitura de Santana de Parnaíba"
              period="2020 - 2021"
              description="Suporte técnico nível 1 e 2 para servidores públicos, manutenção de hardware e treinamento de novos usuários em sistemas internos."
            />
            <ExperienceItem 
              role="Jovem Aprendiz"
              company="FYTERM"
              period="2016"
              description="Suporte administrativo, organização de arquivos e otimização de fluxos de escritório."
            />
          </div>
        </section>

      </main>
    </div>
  );
};

/* Componentes Auxiliares */

const TechBadge = ({ icon, label }) => (
  <div className="tech-badge">
    {icon}
    <span>{label}</span>
  </div>
);

const CertItem = ({ title, date, school }) => (
  <div className="cert-item">
    <div className="cert-icon-wrapper">
      <CheckCircle2 size={16} className="cert-icon" />
    </div>
    <div className="cert-content">
      <h4>{title}</h4>
      <div className="cert-meta">
        <span>{school}</span>
        <span className="separator">•</span>
        <span className="cert-date"><Calendar size={12} style={{marginRight: 4}}/> {date}</span>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ title, desc, link, tags }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
    <div className="project-header">
      <div className="folder-icon">
        <FolderGit2 size={20} />
      </div>
      <ExternalLink size={16} className="external-icon" />
    </div>
    <h4>{title}</h4>
    <p>{desc}</p>
    <div className="tags">
      {tags.map((tag, i) => <span key={i}>{tag}</span>)}
    </div>
  </a>
);

const ExperienceItem = ({ role, company, period, description }) => (
  <div className="exp-item">
    <div className="exp-header">
      <h4>{role}</h4>
      <span className="exp-company">@ {company}</span>
    </div>
    <span className="exp-period">{period}</span>
    <p>{description}</p>
  </div>
);

export default App;