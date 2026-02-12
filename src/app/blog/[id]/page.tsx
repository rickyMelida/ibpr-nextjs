'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import HeroLayout from '@/components/HeroLayout';
import { articles, articleComments } from '@/data/articles';
import type { Article } from '@/data/articles';

/**
 * Individual article page - Optimized for reading experience
 */
export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const articleId = params.id as string;

  const article = articles.find((a) => a.id === articleId);
  const comments = articleComments[articleId] || [];
  const relatedArticles = articles.filter((a) => a.id !== articleId).slice(0, 3);

  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  useEffect(() => {
    if (!article) {
      router.push('/blog');
    }
  }, [article, router]);

  if (!article) {
    return null;
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Comment submitted:', commentData);
    alert('¡Gracias por tu comentario!');
    setCommentData({ name: '', email: '', comment: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HeroLayout isSubPage>
      <section className="layout_padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Back Button */}
          <div className="mb-4">
            <Link href="/blog" className="btn btn-outline-warning">
              <i className="fa fa-arrow-left mr-2"></i> Volver al Blog
            </Link>
          </div>

          {/* Article Header */}
          <div className="card single_post">
            <div className="body">
              <div className="img-post mb-4">
                <img
                  className="d-block img-fluid"
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '500px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </div>

              <h1 className="mb-4" style={{ fontSize: '2.5rem', lineHeight: '1.3' }}>
                {article.title}
              </h1>

              <div className="mb-4 pb-4 border-bottom">
                <span className="text-muted">
                  <i className="fa fa-calendar mr-2"></i>
                  {new Date(article.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="text-muted ml-4">
                  <i className="fa fa-user mr-2"></i>
                  {article.author}
                </span>
              </div>

              {/* Article Content */}
              <div
                className="article-content"
                style={{
                  fontSize: '1.15rem',
                  lineHeight: '1.8',
                  color: '#333',
                }}
              >
                {article.content.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-4 pt-4 border-top">
                <cite
                  style={{
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    color: '#666',
                  }}
                >
                  {article.author}
                </cite>
              </div>

              {/* Tags */}
              <div className="mt-4">
                <h5 className="mb-3">Etiquetas:</h5>
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    href="/blog"
                    className="badge badge-warning mr-2 mb-2"
                    style={{
                      fontSize: '0.95rem',
                      padding: '0.5rem 1rem',
                      textDecoration: 'none',
                    }}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Comments Section */}
          {comments.length > 0 && (
            <div className="card mt-4">
              <div className="header">
                <h2>Comentarios ({comments.length})</h2>
              </div>
              <div className="body">
                <ul className="comment-reply list-unstyled">
                  {comments.map((comment) => (
                    <li key={comment.id} className="row clearfix mb-4">
                      <div className="icon-box col-md-2 col-3">
                        <img
                          className="img-fluid img-thumbnail"
                          src={comment.avatar}
                          alt={comment.author}
                        />
                      </div>
                      <div className="text-box col-md-10 col-9">
                        <h5 className="mb-2">{comment.author}</h5>
                        <p style={{ lineHeight: '1.6' }}>{comment.content}</p>
                        <ul className="list-inline">
                          <li>
                            <small className="text-muted">
                              {new Date(comment.date).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </small>
                          </li>
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Comment Form */}
          <div className="card mt-4">
            <div className="header">
              <h2>
                Deja tu comentario <br />
                <small className="subtile">
                  Tu dirección de correo electrónico no será publicada.
                </small>
              </h2>
            </div>
            <div className="body">
              <form onSubmit={handleCommentSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="name">Nombre *</label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Tu nombre"
                        name="name"
                        value={commentData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="email">Correo Electrónico *</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="tu@correo.com"
                        name="email"
                        value={commentData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <label htmlFor="comment">Comentario *</label>
                      <textarea
                        id="comment"
                        rows={6}
                        className="form-control"
                        placeholder="Escribe tu comentario aquí..."
                        name="comment"
                        value={commentData.comment}
                        onChange={handleChange}
                        required
                        style={{ resize: 'vertical' }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-warning btn-lg px-5">
                      ENVIAR COMENTARIO
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-5">
              <h2 className="mb-4">Artículos Relacionados</h2>
              <div className="row">
                {relatedArticles.map((relatedArticle) => (
                  <div key={relatedArticle.id} className="col-md-4 mb-4">
                    <div className="card h-100">
                      <div className="body">
                        <Link href={`/blog/${relatedArticle.id}`}>
                          <img
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            className="img-fluid mb-3"
                            style={{
                              height: '200px',
                              objectFit: 'cover',
                              width: '100%',
                              borderRadius: '4px',
                              cursor: 'pointer',
                            }}
                          />
                        </Link>
                        <h5>
                          <Link
                            href={`/blog/${relatedArticle.id}`}
                            style={{
                              textDecoration: 'none',
                              color: 'inherit',
                            }}
                          >
                            {relatedArticle.title}
                          </Link>
                        </h5>
                        <p className="mb-3">
                          <small className="text-muted">
                            {new Date(relatedArticle.date).toLocaleDateString(
                              'es-ES',
                              {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              }
                            )}
                          </small>
                        </p>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                          {relatedArticle.excerpt.substring(0, 100)}...
                        </p>
                        <Link
                          href={`/blog/${relatedArticle.id}`}
                          className="btn btn-sm btn-outline-warning"
                        >
                          Leer más
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="card mt-4">
            <div className="body text-center py-4">
              <h5 className="mb-3">Compartir este artículo</h5>
              <div>
                <button className="btn btn-outline-primary mx-2 mb-2">
                  <i className="fa fa-facebook mr-2"></i> Facebook
                </button>
                <button className="btn btn-outline-info mx-2 mb-2">
                  <i className="fa fa-twitter mr-2"></i> Twitter
                </button>
                <button className="btn btn-outline-success mx-2 mb-2">
                  <i className="fa fa-whatsapp mr-2"></i> WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HeroLayout>
  );
}
