import React from 'react';
import './BlogCard.css';

function BlogCard({ title, date, categories, description }) {
  return (
    <div className="blog-card">
      <h3 className="blog-card-title">{title}</h3>
      <div className="blog-card-meta">
        <span className="blog-card-date">{date}</span>
        {categories && (
          <span className="blog-card-categories">
            {categories.join(', ')}
          </span>
        )}
      </div>
      <p className="blog-card-description">{description}</p>
    </div>
  );
}

export default BlogCard;