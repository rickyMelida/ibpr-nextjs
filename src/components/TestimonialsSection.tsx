'use client';

import { useState } from 'react';

/**
 * Testimonials carousel section component
 * Single Responsibility: Display testimonials carousel
 */
export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: '1',
      name: 'Moana Michell',
      text: '"Seguir a Cristo es lo mejor que me paso en mi vida, jamas pense que cambiaria de tal forma que muchos ya ni me reconocen, pude terminar mi facultad.."',
      imageUrl: '/images/testimonies/member_1.jpg',
    },
    {
      id: '2',
      name: 'Mike Hamell',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      imageUrl: '/images/testimonies/member_2.jpg',
    },
  ];

  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb_45">
          <h2>Testimonios</h2>
        </div>
        <div className="carousel-wrap row">
          <div className="owl-carousel client_owl-carousel">
            {testimonials.map((testimony, index) => (
              <div key={testimony.id} className={`item ${index === activeIndex ? 'active' : ''}`}>
                <div className="box">
                  <div className="detail-box">
                    <p>{testimony.text}</p>
                    <h6>{testimony.name}</h6>
                  </div>
                  <div className="img-box">
                    <img src={testimony.imageUrl} alt={testimony.name} className="box-img" />
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
