import HeroLayout from '@/components/HeroLayout';

/**
 * Activity detail page - Following KISS principle
 */

// Mock data - In production, this would come from a database or API
const activitiesData = {
  '1': {
    id: '1',
    title: 'Festejo Día de Juventud',
    description: 'Una celebración especial dedicada a los jóvenes de nuestra congregación. Un día lleno de alabanza, actividades recreativas y mensajes inspiradores que fortalecen la fe y el compañerismo entre los jóvenes.',
    imageUrl: '/images/activities/act_1.jpg',
    date: '2024-03-15',
    location: 'Salón Principal',
  },
  '2': {
    id: '2',
    title: 'Conferencia sobre Misiones',
    description: 'Conferencia especial sobre el campo misionero y cómo podemos participar en la Gran Comisión. Incluye testimonios de misioneros y oportunidades para involucrarse en proyectos misioneros.',
    imageUrl: '/images/activities/act_2.jpg',
    date: '2024-04-20',
    location: 'Auditorio',
  },
  '3': {
    id: '3',
    title: 'Festejo Día del Pastor',
    description: 'Celebración en honor a nuestro pastor y su familia, reconociendo su liderazgo y dedicación al servicio del Señor. Un tiempo de gratitud y bendición.',
    imageUrl: '/images/activities/act_3.jpg',
    date: '2024-05-10',
    location: 'Salón Principal',
  },
  '4': {
    id: '4',
    title: 'Conferencia: Levantate y Anda',
    description: 'Una conferencia poderosa sobre restauración y renovación espiritual. Mensajes que nos inspiran a levantarnos en fe y caminar en el propósito que Dios tiene para nuestras vidas.',
    imageUrl: '/images/activities/act_4.jpg',
    date: '2024-06-15',
    location: 'Auditorio',
  },
  '5': {
    id: '5',
    title: 'Navidad en Cristo',
    description: 'Celebración especial de Navidad con la familia de la iglesia. Alabanza, reflexión sobre el nacimiento de Jesús, y confraternidad con refrigerio especial.',
    imageUrl: '/images/activities/act_5.jpg',
    date: '2024-12-24',
    location: 'Salón Principal',
  },
  '6': {
    id: '6',
    title: 'Cena Fin de Año',
    description: 'Cena de fin de año para despedir el año con gratitud y dar la bienvenida al nuevo año con esperanza. Un tiempo de comunión, testimonios y oración.',
    imageUrl: '/images/activities/act_6.jpg',
    date: '2024-12-31',
    location: 'Salón de Eventos',
  },
};

interface ActivityDetailProps {
  params: {
    id: string;
  };
}

export default function ActivityDetail({ params }: ActivityDetailProps) {
  const activity = activitiesData[params.id as keyof typeof activitiesData];

  if (!activity) {
    return (
      <HeroLayout isSubPage>
        <section className="food_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2 className='text-light'>Actividad no encontrada</h2>
            </div>
            <div className="text-center">
              <p className="text-light">La actividad que buscas no existe.</p>
              <a href="/actividades" className="btn btn-warning mt-3">
                Volver a Actividades
              </a>
            </div>
          </div>
        </section>
      </HeroLayout>
    );
  }

  return (
    <HeroLayout isSubPage>
      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center mb-5">
            <h2 className='text-light'>{activity.title}</h2>
          </div>
          
          {/* Contenedor principal con fondo semi-transparente */}
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '15px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          }}>
            <div className="row align-items-center">
              {/* Imagen de la actividad */}
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '15px',
                  boxShadow: '0 8px 20px rgba(255, 193, 7, 0.3)',
                  border: '3px solid rgba(255, 193, 7, 0.5)',
                }}>
                  <img 
                    src={activity.imageUrl} 
                    alt={activity.title}
                    style={{ 
                      width: '100%',
                      display: 'block',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </div>
              </div>
              
              {/* Detalles de la actividad */}
              <div className="col-lg-7">
                <div style={{ paddingLeft: '30px' }}>
                  <h3 className="text-warning mb-4" style={{ 
                    fontSize: '1.8rem',
                    borderBottom: '2px solid #ffc107',
                    paddingBottom: '10px',
                  }}>
                    Detalles de la Actividad
                  </h3>
                  
                  {/* Descripción */}
                  <div className="mb-4" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '20px',
                    borderRadius: '10px',
                    borderLeft: '4px solid #ffc107',
                  }}>
                    <h5 className="text-warning mb-3" style={{ fontSize: '1.2rem' }}>
                      📋 Descripción
                    </h5>
                    <p className="text-light" style={{ 
                      lineHeight: '1.8',
                      fontSize: '1rem',
                      marginBottom: '0',
                    }}>
                      {activity.description}
                    </p>
                  </div>
                  
                  {/* Información adicional */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div style={{
                        backgroundColor: 'rgba(255, 193, 7, 0.1)',
                        padding: '15px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 193, 7, 0.3)',
                      }}>
                        <h5 className="text-warning mb-2" style={{ fontSize: '1rem' }}>
                          📅 Fecha
                        </h5>
                        <p className="text-light mb-0" style={{ fontSize: '1rem' }}>
                          {activity.date}
                        </p>
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <div style={{
                        backgroundColor: 'rgba(255, 193, 7, 0.1)',
                        padding: '15px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 193, 7, 0.3)',
                      }}>
                        <h5 className="text-warning mb-2" style={{ fontSize: '1rem' }}>
                          📍 Ubicación
                        </h5>
                        <p className="text-light mb-0" style={{ fontSize: '1rem' }}>
                          {activity.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botón de regreso */}
                  <div className="mt-4">
                    <a 
                      href="/actividades" 
                      className="btn btn-warning"
                      style={{
                        padding: '12px 30px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(255, 193, 7, 0.3)',
                      }}
                    >
                      ← Volver a Actividades
                    </a>
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
