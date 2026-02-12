/**
 * Articles/Blog section component
 * Single Responsibility: Display article grid
 */
interface ArticlesSectionProps {
  showAllLink?: boolean;
}

export default function ArticlesSection({ showAllLink = true }: ArticlesSectionProps) {
  const articles = [
    {
      id: '1',
      title: 'La cruz de Cristo',
      excerpt: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imageUrl: '/images/articles/image_1.png',
    },
    {
      id: '2',
      title: '¡Atención hormigas!',
      excerpt: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imageUrl: '/images/articles/image_2.png',
    },
    {
      id: '3',
      title: 'El cuerpo de Cristo',
      excerpt: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imageUrl: '/images/articles/image_3.png',
    },
    {
      id: '4',
      title: 'Redimiento el tiempo',
      excerpt: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imageUrl: '/images/articles/image_4.png',
    },
    {
      id: '5',
      title: 'El Espíritu Santo',
      excerpt: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imageUrl: '/images/articles/image_5.png',
    },
    {
      id: '6',
      title: 'La verdadera Navidad',
      excerpt: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imageUrl: '/images/articles/image_6.png',
    },
  ];

  return (
    <section className="food_section layout_padding-bottom">
      <div className="filters-content">
        <div className="row grid">
          {articles.map((article) => (
            <div key={article.id} className="col-sm-6 col-lg-4 all pizza">
              <div className="box">
                <div>
                  <div className="img-box">
                    <img src={article.imageUrl} alt={article.title} />
                  </div>
                  <div className="detail-box">
                    <h5>{article.title}</h5>
                    <p>{article.excerpt}</p>
                    <div>
                      <a className="btn btn-warning" href="#">
                        leer mas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showAllLink && (
        <div className="btn-box">
          <a href="/blog">Ver mas</a>
        </div>
      )}
    </section>
  );
}
