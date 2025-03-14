import React from 'react';
import './Blog.css';
import BlogCard from './BlogCard';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Mais produtividade com IA: Utilizando dos papéis no prompting',
      date: 'Jan 2025',
      categories: ['IA', 'Produtividade'],
      description: 'Em vez de perguntar simplesmente me explique sobre marketing digital, experimente: Como professor especialista em marketing digital com 15 anos de experiência, explique os fundamentos mais importantes para um iniciante, focando nos conceitos que realmente fazem diferença na prática.'
    },
    {
      id: 2,
      title: 'Hooks no React',
      date: 'Fev 2025',
      categories: ['React', 'Hooks'],
      description: 'Um dos Hooks mais utilizados são o useState() e useEffect(), que gerenciam o estado de um componente de uma forma simples. Com eles o seu código mais limpo, fácil de entender e sem de classes para gerenciar estado.'
    }
  ];

  return (
    <section className="blog-section" id="blog">
      <h2 className="section-title">Blog</h2>
      <div className="blog-grid">
        {blogPosts.map(post => (
          <BlogCard
            key={post.id}
            title={post.title}
            date={post.date}
            categories={post.categories}
            description={post.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Blog;