'use client';

import { useSlideStore } from '@/stores/slideStore';
import { useEffect } from 'react';

/**
 * Hero Slider component - Single Responsibility: display hero slideshow
 * Following KISS principle - simple carousel logic
 */
export default function HeroSlider() {
  const { currentSlide, slides, setCurrentSlide, nextSlide } = useSlideStore();

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>{slide.text}</h1>
                      <p>{slide.reference}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container">
          <ol className="carousel-indicators">
            {slides.map((_, index) => (
              <li
                key={index}
                data-target="#customCarousel1"
                data-slide-to={index}
                className={index === currentSlide ? 'active' : ''}
                onClick={() => setCurrentSlide(index)}
              ></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
