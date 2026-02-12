import HeroLayout from '@/components/HeroLayout';

/**
 * Activities page - Following KISS principle
 */
export default function ActivitiesPage() {
  const activities = [
    {
      id: '1',
      title: 'Festejo Día de Juventud',
      excerpt: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imageUrl: '/images/activities/act_1.jpg',
    },
    {
      id: '2',
      title: 'Conferencia sobre Misiones',
      excerpt: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imageUrl: '/images/activities/act_2.jpg',
    },
    {
      id: '3',
      title: 'Festejo Día del Pastor',
      excerpt: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imageUrl: '/images/activities/act_3.jpg',
    },
    {
      id: '4',
      title: 'Conferencia: Levantate y Anda',
      excerpt: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imageUrl: '/images/activities/act_4.jpg',
    },
    {
      id: '5',
      title: 'Navidad en Cristo',
      excerpt: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imageUrl: '/images/activities/act_5.jpg',
    },
    {
      id: '6',
      title: 'Cena Fin de Año',
      excerpt: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imageUrl: '/images/activities/act_6.jpg',
    },
  ];

  return (
    <HeroLayout isSubPage>
      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2 className='text-light'>Actividades</h2>
          </div>
          <div className="filters-content">
            <div className="row grid">
              {activities.map((activity) => (
                <div key={activity.id} className="col-sm-6 col-lg-4 all pizza">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src={activity.imageUrl} alt={activity.title} />
                      </div>
                      <div className="detail-box">
                        <h5>{activity.title}</h5>
                        <p>{activity.excerpt}</p>
                        <div>
                          <a href={`/actividades/${activity.id}`} className="btn btn-warning">
                            ver detalles
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </HeroLayout>
  );
}
