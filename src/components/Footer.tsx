'use client';

import { useUIStore } from '@/stores/uiStore';
import Link from 'next/link';

/**
 * Footer component - Single Responsibility: render footer section
 * Following KISS principle
 */
export default function Footer() {
  const { currentYear } = useUIStore();

  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Contáctenos</h4>
              <div className="contact_link_box">
                <a href="https://maps.app.goo.gl/iJDfNvNmvxkU8UZZ7" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Ubicacion</span>
                </a>
                <a href="tel:021527168">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>021 527 168</span>
                </a>
                <a href="mailto:ibpr_mc@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>ibpr_mc@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <Link href="/" className="footer-logo">
                IBPR
              </Link>
              <p>Iglesia Evangélica Bautista Panambi Retá</p>
              <div className="footer_social">
                <a href="#" aria-label="Facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#" aria-label="WhatsApp">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <h4>Horario Servicios</h4>
            <p>Culto Principal - Domingo 10:00 hs</p>
            <p>Culto Horación - Miércoles 19:30 hs</p>
          </div>
        </div>
        <div className="footer-info">
          <p>
            &copy; <span id="displayYear">{currentYear}</span> Todos los derechos reservados{' '}
            <a href="https://github.com">MC - IBPR</a>
            <br />
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
}
