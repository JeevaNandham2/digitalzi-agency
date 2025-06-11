import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'websitedesign', name: 'Website Design' },
    { id: 'videoediting', name: 'Video Editing' },
    { id: 'socialmedia', name: 'Social Media' },
    { id: 'vfxmotiongraphics', name: 'VFX Motion Graphics' },
    { id: 'adanalytics', name: 'AD Analytics' }
  ];

  const blogPosts = [
    {
      title: 'The Complete Guide to SEO in 2025: Strategies That Actually Work',
      excerpt: 'Discover the latest SEO trends and proven strategies that are driving results in 2025.',
      date: 'April 15, 2025',
      readTime: '8 min read',
      category: 'websitedesign',
      author: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=300&fit=crop',
      featured: true
    },
    {
      title: 'PPC Automation: How AI is Revolutionizing Paid Advertising',
      excerpt: 'Learn how AI is transforming PPC campaigns and discover efficient tools.',
      date: 'December 12, 2025',
      readTime: '6 min read',
      category: 'adanalytics',
      author: 'Mike Chen',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop'
    },
    {
      title: 'Social Media Trends That Will Dominate 2025',
      excerpt: 'Explore the trends that are reshaping social media marketing strategies.',
      date: 'December 10, 2024',
      readTime: '5 min read',
      category: 'socialmedia',
      author: 'Emily Rodriguez',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=300&fit=crop'
    },
    {
      title: 'Content Marketing ROI: Measuring What Really Matters',
      excerpt: 'Learn key metrics and tools that reveal the impact of your content efforts.',
      date: 'December 8, 2024',
      readTime: '7 min read',
      category: 'videoediting',
      author: 'David Park',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop'
    },
    {
      title: 'Google Analytics 4: Advanced Tracking for Marketing Success',
      excerpt: 'Master GA4 with custom events and actionable insights.',
      date: 'December 5, 2024',
      readTime: '10 min read',
      category: 'adanalytics',
      author: 'Lisa Wang',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop'
    },
    {
      title: 'Local SEO Mastery: Dominating Local Search Results',
      excerpt: 'Complete local SEO guide including GMB, citations, and reviews.',
      date: 'December 3, 2024',
      readTime: '9 min read',
      category: 'vfxmotiongraphics',
      author: 'John Smith',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop'
    }
  ];

  const filteredPosts =
    selectedCategory === 'all'
      ? blogPosts
      : blogPosts.filter(
          post =>
            post.category.toLowerCase().replace(/\s/g, '') === selectedCategory
        );

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="blog-page">
      <section className="blog-hero section">
        <div className="container">
          <div className="hero-content">
            <h1 className="section-title">Digital Marketing Insights & Strategies</h1>
            <p className="section-subtitle">
              Stay ahead with insights, trends, and strategies from the DigitalZi team.
            </p>
            <div className="hero-features">
              <div className="feature-item">📚 Expert-written guides</div>
              <div className="feature-item">📊 Data-driven insights</div>
              <div className="feature-item">🎯 Actionable strategies</div>
            </div>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="featured-post section">
          <div className="container">
            <div className="featured-content">
              <div className="featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className="featured-badge">Featured Article</div>
              </div>
              <div className="featured-text">
                <div className="post-meta">
                  <span className="category-tag featured">
                    {featuredPost.category.toUpperCase()}
                  </span>
                  <span className="read-time">{featuredPost.readTime}</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <div className="post-footer">
                  <span>By {featuredPost.author}</span>
                  <span className="date">{featuredPost.date}</span>
                  <a href="#" className="read-more-btn">Read Full Article →</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="blog-content section">
        <div className="container">
          <div className="blog-header">
            <h2>Our Projects📊</h2>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-grid">
            {filteredPosts
              .filter(post => !post.featured)
              .map((post, index) => (
                <article key={index} className="blog-card">
                  <div className="card-image">
                    <img src={post.image} alt={post.title} />
                    <div className="image-overlay">
                      <span className="category-tag">
                        {post.category.replace(/-/g, ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="post-meta">
                      <span className="read-time">{post.readTime}</span>
                      <span className="date">{post.date}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="card-footer">
                      <span>By {post.author}</span>
                      <a href="#" className="read-more">Read More →</a>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Connect Section */}
      <section className="whatsapp-connect section" style={{ backgroundColor: 'hsl(50.79deg 100% 50.2%)', padding: '40px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color:'black', marginBottom: '20px' }}>Connect with us on WhatsApp</h2>
          <p style={{ color: 'black', marginBottom: '30px' }}>Have questions or need help? We're just a message away!</p>
          <a
            href="https://wa.me/919640709670"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            style={{
              display: 'inline-block',
              backgroundColor: '#fff',
              color: '#25D366',
              padding: '12px 24px',
              borderRadius: '6px',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '16px'
            }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;
