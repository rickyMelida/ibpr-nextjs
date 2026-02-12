'use client';

import { useState } from 'react';
import HeroLayout from '@/components/HeroLayout';

/**
 * Prayer Requests page - Following KISS principle
 */
export default function PrayerRequestsPage() {
  const [formData, setFormData] = useState({
    name: '',
    prayer: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Prayer request submitted:', formData);
    alert('Gracias por tu petición de oración. Estaremos orando por ti.');
    setFormData({ name: '', prayer: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HeroLayout isSubPage>
      <section className="book_section layout_padding">
        <div className="container">
          <div className="heading_container mb-5">
            <h2 className='text-light'>Dejanos tus pedidos de oración</h2>
            <p className="w-50 font-italic text-light">
              &ldquo;Y la oración de fe salvará al enfermo, y el Señor lo levantará; y
              si hubiere cometido pecados, le serán perdonados&rdquo;
              <cite className="d-block mt-2">Santiago 5:16</cite>
            </p>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="form_container">
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      className="form-control"
                      id="prayer"
                      rows={3}
                      placeholder="Quisiera que oren por.."
                      name="prayer"
                      value={formData.prayer}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <small id="emailHelp" className="form-text text-muted">
                    Cuando Dios responda tu oración no dudes en escribirnos.
                  </small>
                  <div>
                    <button className="btn btn-primary" type="submit">
                      Solicitar Oración
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
    </HeroLayout>
  );
}
