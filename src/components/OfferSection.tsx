'use client';

/**
 * Offer/Activities highlight section component
 * Single Responsibility: Display featured activities
 */
interface OfferSectionProps {
  activities?: Array<{
    id: string;
    title: string;
    date: string;
    month: string;
    imageUrl: string;
  }>;
}

export default function OfferSection({ activities }: OfferSectionProps) {
  const defaultActivities = [
    {
      id: '1',
      title: 'Festejo día de la juventud',
      date: '21',
      month: 'Septiembre',
      imageUrl: '/images/activities/act_1.jpg',
    },
    {
      id: '2',
      title: 'Festejo Dia del Pastor',
      date: '15',
      month: 'Noviembre',
      imageUrl: '/images/activities/act_3.jpg',
    },
  ];

  const items = activities || defaultActivities;

  return (
    <section className="offer_section layout_padding-bottom">
      <div className="offer_container">
        <div className="container">
          <div className="row">
            {items.map((activity) => (
              <div key={activity.id} className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src={activity.imageUrl} alt={activity.title} />
                  </div>
                  <div className="detail-box">
                    <h5>{activity.title}</h5>
                    <h6>
                      <span>{activity.date}</span> {activity.month}
                    </h6>
                    <div>
                      <a className="btn btn-warning" href="#">
                        ver detalles
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
