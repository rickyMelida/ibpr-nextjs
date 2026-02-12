'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroLayout from '@/components/HeroLayout';
import { articles } from '@/data/articles';

/**
 * Blog listing page - Shows all available articles
 */
export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', newsletterEmail);
    alert('¡Gracias por suscribirte!');
    setNewsletterEmail('');
  };

  const allTags = Array.from(new Set(articles.flatMap((article) => article.tags)));

  return (
    <HeroLayout isSubPage>
      <section className="layout_padding">
        <div className="container-fluid" style={{ maxWidth: '1400px' }}>
          <div className="heading_container heading_center mb-5">
            <h2 className="text-light">Blog</h2>
            <p className="text-light mt-3">
              Recursos espirituales para fortalecer tu fe y crecimiento en Cristo
            </p>
          </div>

          {/* Search Bar */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 col-md-10">
              <div className="card">
                <div className="body search">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Buscar por título, contenido o etiquetas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="row">
            {filteredArticles.map((article) => (
              <div key={article.id} className="col-lg-6 col-md-12 mb-4">
                <div className="card single_post h-100">
                  <div className="body">
                    <div className="img-post">
                      <Link href={`/blog/${article.id}`}>
                        <img
                          className="d-block img-fluid"
                          src={article.image}
                          alt={article.title}
                          style={{
                            height: '300px',
                            objectFit: 'cover',
                            cursor: 'pointer',
                          }}
                        />
                      </Link>
                    </div>
                    <h3 className="mt-3">
                      <Link
                        href={`/blog/${article.id}`}
                        style={{
                          textDecoration: 'none',
                          color: 'inherit',
                        }}
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <div className="mb-3">
                      <small className="text-muted">
                        <i className="fa fa-calendar mr-2"></i>
                        {new Date(article.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </small>
                      <small className="text-muted ml-3">
                        <i className="fa fa-user mr-2"></i>
                        {article.author}
                      </small>
                    </div>
                    <p className="mb-3">{article.excerpt}</p>
                    <div className="mb-3">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="badge badge-warning mr-2"
                          style={{ fontSize: '0.85rem', padding: '0.4rem 0.6rem' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/blog/${article.id}`} className="btn btn-warning">
                      Leer más <i className="fa fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="row">
              <div className="col-12 text-center">
                <div className="card">
                  <div className="body py-5">
                    <h4>No se encontraron artículos</h4>
                    <p className="text-muted">
                      Intenta con otros términos de búsqueda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tags and Newsletter Section */}
          <div className="row mt-5">
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card">
                <div className="header">
                  <h2>Temas</h2>
                </div>
                <div className="body widget">
                  <ul className="list-unstyled categories-clouds m-b-0">
                    {allTags.map((tag) => (
                      <li key={tag}>
                        <button
                          type="button"
                          className="btn btn-outline-warning"
                          onClick={() => setSearchTerm(tag)}
                        >
                          {tag}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card">
                <div className="header">
                  <h2>
                    Boletín Electrónico <br />
                    <small className="subtile">
                      Recibe semanalmente artículos que te ayudarán a edificar tu
                      vida espiritual.
                    </small>
                  </h2>
                </div>
                <div className="body widget newsletter">
                  <form onSubmit={handleNewsletterSubmit}>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Ingrese su correo"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        required
                      />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-warning">
                          <i className="fa fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HeroLayout>
  );
}
