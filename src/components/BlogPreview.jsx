
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPreview.css';

const BlogPreview = () => {
  const blogPosts = [
    {
      title: '10 SEO Tips for 2024',
      excerpt: 'Stay ahead with the latest SEO strategies.',
      date: 'Dec 1, 2024',
      category: 'SEO'
    },
    {
      title: 'Social Media Trends',
      excerpt: 'Discover what\'s trending in social media.',
      date: 'Nov 28, 2024',
      category: 'Social Media'
    },
    {
      title: 'PPC Best Practices',
      excerpt: 'Maximize your advertising ROI.',
      date: 'Nov 25, 2024',
      category: 'PPC'
    }
  ];

  return (
    <section className="blog-preview section">
      <div className="container">
        <h2 className="section-title">Latest Insights</h2>
        <p className="section-subtitle">
          Stay updated with digital marketing trends and tips
        </p>
        
        <div className="blog-preview-grid grid grid-3">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-preview-card">
              <div className="blog-preview-category">{post.category}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-preview-date">{post.date}</div>
            </article>
          ))}
        </div>
        
        <div className="blog-preview-cta">
          <Link to="/blog" className="btn btn-secondary">
            Read More Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
