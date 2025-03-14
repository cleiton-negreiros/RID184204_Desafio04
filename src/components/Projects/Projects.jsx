import React, { useState, useEffect } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

// Importe as imagens dos projetos
import dashboardImg from '../../assets/landing-page.jpg';
import portraitImg from '../../assets/todo-list.jpg';
import malayalamImg from '../../assets/robo-crypto.jpg';

function Projects() {
  const allProjects = [
    {
      id: 1,
      title: 'Landing Page',
      description: 'Projeto de uma landing page simples que pode ser utilizada para divulgar diversos segmentos, profissionais liberais e negócios digitais.',
      image: dashboardImg,
      category: 'Front End'
    },
    {
      id: 2,
      title: 'todo-list em JavaScript',
      description: 'Projeto de uma Lista de Tarefas simples. É possível adicionar, marcar como concluído e deletar tarefas.',
      image: portraitImg,
      category: 'Front End'
    },
    {
      id: 3,
      title: 'Robô Criptomoedas',
      description: 'Projeto simples feito em JavaScript. Listagem das principais criptomoedas em baixa e em alta atualizadas automaticamente',
      image: malayalamImg,
      category: 'Full Stack'
    }
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [animate, setAnimate] = useState(false);

  // Extrair todas as categorias únicas
  const categories = ['All', ...new Set(allProjects.map(project => project.category))];

  // useEffect para filtrar projetos quando o filtro muda
  useEffect(() => {
    setAnimate(false);
    
    setTimeout(() => {
      if (activeFilter === 'All') {
        setFilteredProjects(allProjects);
      } else {
        const filtered = allProjects.filter(project => project.category === activeFilter);
        setFilteredProjects(filtered);
      }
      setAnimate(true);
    }, 300);
    
  }, [activeFilter]);

  // Inicializar com todos os projetos
  useEffect(() => {
    setFilteredProjects(allProjects);
    setTimeout(() => setAnimate(true), 300);
  }, []);

  return (
    <section className="projects-section" id="projetos">
      <div className="projects-header">
        <h2 className="section-title">Projetos</h2>
        <div className="filter-buttons">
          {categories.map(category => (
            <button 
              key={category} 
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="projects-list">
        {filteredProjects.map(project => (
          <div key={project.id} className={`project-item ${animate ? 'animate' : ''}`}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;