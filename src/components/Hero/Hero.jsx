import React from 'react';
import './Hero.css';
import DownloadButton from '../DownloadButton/DownloadButton';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Olá, eu sou Cleiton</h1>
        <h2 className="hero-subtitle">Desenvolvedor Full-stack</h2>
        <p className="hero-description">
        Profissional de TI há mais de 25 anos atuando principalmente em empresas de grande porte na área de Infraestrutura de TI
        Sou estudante de Engenharia de Software e me especializando nas linguangens, frameworks e ferramentas mais modernas para
        desenvolvimentos de sites.
        </p>
        <DownloadButton />
      </div>
    </section>
  );
}

export default Hero;