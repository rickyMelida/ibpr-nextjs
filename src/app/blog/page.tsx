'use client';

import { useState } from 'react';
import HeroLayout from '@/components/HeroLayout';

/**
 * Blog page - Following KISS principle
 */
export default function BlogPage() {
  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Comment submitted:', commentData);
    alert('Gracias por tu comentario!');
    setCommentData({ name: '', email: '', comment: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HeroLayout isSubPage>
      <section className="layout_padding">
        <div className="container">
          <div className="heading_container heading_center mb-5">
            <h2 className='text-light'>Blog</h2>
          </div>
          <div id="main-content" className="blog-page">
            <div className="container">
              <div className="row clearfix">
                <div className="col-lg-8 col-md-12 left-box">
                  <div className="card single_post">
                    <div className="body">
                      <div className="img-post">
                        <img
                          className="d-block img-fluid"
                          src="/images/slideshow/crecimiento.jpeg"
                          alt="Una iglesia que crece"
                        />
                      </div>
                      <h3>
                        <a href="#">Una Iglesia que crece</a>
                      </h3>
                      <p>
                        Una iglesia que crece, tiene que aprender a escuchar a
                        Dios y creerle. Creerle a Dios implica aceptar Su palabra
                        y entregarse para hacer su voluntad. Esto trae consigo una
                        crisis, o sea, un conflicto de voluntades.
                      </p>
                      <p>
                        Por un lado, sé que la voluntad de Dios es la mejor, es buena y no se
                        puede cambiar. Por otro, está la mía que es débil, egoísta
                        y se opone a la de Dios. Cuando oramos, confrontamos
                        nuestro ser, con el de Dios, tres veces Santo, perfecto,
                        puro.
                      </p>
                      <p>
                        Cuando oramos, no podemos salir de su Presencia
                        igual que como entramos. Hay un cambio que debemos de
                        efectuar; ajustar a su voluntad y propósito. Para la
                        iglesia de Jerusalén, en Antioquía, esto es normal. Ellos
                        dieron sus vidas por su Señor y Salvador Jesucristo.
                      </p>
                      <p>
                        Cuando aprendamos esto de aquellos nuestros hermanos que
                        oyendo la voz del Señor, no fueron rebeldes, sino que a su
                        obediencia, resultó en un crecimiento maravilloso del
                        Reino de Dios en todo el mundo conocido entonces, seremos
                        como ellos una iglesia ferviente en espíritu, pujante,
                        llenos de fe en nuestro Señor.
                      </p>
                      <p>
                        Él fue generoso en su ofrenda; su propia vida en una horrible cruz para
                        salvarnos de toda condenación. Hermanos, queremos crecer
                        en todo, y esto le agrada al Señor. Entonces decídete a
                        entrar a la vida de oración para entrenar tu oído
                        espiritual para oír la voz de tu Señor y obedecerle.
                      </p>
                      <cite>Pr. Alfredo Figari</cite>
                    </div>
                  </div>
                  
                  <div className="card">
                    <div className="header">
                      <h2>Comentarios</h2>
                    </div>
                    <div className="body">
                      <ul className="comment-reply list-unstyled">
                        <li className="row clearfix">
                          <div className="icon-box col-md-2 col-4">
                            <img
                              className="img-fluid img-thumbnail"
                              src="https://bootdey.com/img/Content/avatar/avatar7.png"
                              alt="Gigi Hadid"
                            />
                          </div>
                          <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                            <h5 className="m-b-0">María González</h5>
                            <p>
                              Me encanta este mensaje sobre el crecimiento espiritual. 
                              Realmente necesitamos aprender a escuchar la voz de Dios 
                              y ser obedientes a Su voluntad.
                            </p>
                            <ul className="list-inline">
                              <li>
                                <a href="#">Marzo 09, 2023</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="row clearfix">
                          <div className="icon-box col-md-2 col-4">
                            <img
                              className="img-fluid img-thumbnail"
                              src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              alt="Christian Louboutin"
                            />
                          </div>
                          <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                            <h5 className="m-b-0">Carlos Méndez</h5>
                            <p>
                              Excelente reflexión pastor. La oración es fundamental 
                              para ajustarnos a la voluntad de Dios. Bendiciones!
                            </p>
                            <ul className="list-inline">
                              <li>
                                <a href="#">Marzo 12, 2023</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="row clearfix">
                          <div className="icon-box col-md-2 col-4">
                            <img
                              className="img-fluid img-thumbnail"
                              src="https://bootdey.com/img/Content/avatar/avatar4.png"
                              alt="Kendall Jenner"
                            />
                          </div>
                          <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                            <h5 className="m-b-0">Ana Rivera</h5>
                            <p>
                              Hermoso artículo que nos recuerda la importancia de crecer 
                              en fe y oración. Dios nos ayude a ser fieles.
                            </p>
                            <ul className="list-inline">
                              <li>
                                <a href="#">Marzo 20, 2023</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="card">
                    <div className="header">
                      <h2>
                        Deja tu respuesta <br />
                        <small className="subtile">
                          Tu dirección de correo electrónico no será publicada.
                        </small>
                      </h2>
                    </div>
                    <div className="body">
                      <div className="comment-form">
                        <form className="row clearfix" onSubmit={handleCommentSubmit}>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="name"
                                value={commentData.name}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="email"
                                value={commentData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <textarea
                                rows={4}
                                className="form-control no-resize"
                                placeholder="Por favor escribe lo que quieras..."
                                name="comment"
                                value={commentData.comment}
                                onChange={handleChange}
                                required
                              ></textarea>
                            </div>
                            <button type="submit" className="btn btn-block btn-warning">
                              ENVIAR
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 right-box">
                  <div className="card">
                    <div className="body search">
                      <div className="input-group m-b-0">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-search"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Buscar..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="header">
                      <h2>Articulos Relacionados</h2>
                    </div>
                    <div className="body widget">
                      <ul className="list-unstyled categories-clouds m-b-0">
                        {['Iglesia', 'Vida Eterna', 'Salvación', 'Dios', 'Jesús', 'Espíritu Santo', 'Biblia', 'Teología', 'Iglesia Bautista', 'Verdad'].map((tag) => (
                          <li key={tag}>
                            <a href="#" className="btn btn-outline-warning">
                              {tag}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="card">
                    <div className="header">
                      <h2>Popular Posts</h2>
                    </div>
                    <div className="body widget popular-post">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="single_post">
                            <p className="m-b-0">La verdadera grandeza</p>
                            <span>junio 22, 2023</span>
                            <div className="img-post">
                              <img src="/images/slideshow/grandeza.jpg" alt="Grandeza" />
                            </div>
                          </div>
                          <div className="single_post">
                            <p className="m-b-0">Por que usted lo vale!</p>
                            <span>junio 8, 2023</span>
                            <div className="img-post">
                              <img src="/images/slideshow/alma.jpg" alt="Sentido" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="header">
                      <h2>
                        Boletín Electrónico <br />
                        <small className="subtile">
                          Recibe semanalmente articulos que te ayudaran a edificar tu
                          vida espiritual.
                        </small>
                      </h2>
                    </div>
                    <div className="body widget newsletter">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ingrese su correo"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="icon-paper-plane"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HeroLayout>
  );
}
