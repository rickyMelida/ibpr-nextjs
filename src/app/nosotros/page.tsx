import HeroLayout from '@/components/HeroLayout';

/**
 * About page - Following KISS principle
 */
export default function AboutPage() {
  return (
    <HeroLayout isSubPage>
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="/images/church logo.png" alt="Logo IBPR" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2 className="mx-auto">Nuestra Misión</h2>
                </div>
                <p className="text-center">
                  Hacer conocer a las personas acerca de las enseñanzas, doctrinas
                  y fundamentos que la Biblia enseña, y que lleguen al pleno
                  conocimiento de la persona de Jesucristo, obedeciendo a ello con
                  un testimonio real de lo que predicamos
                </p>
              </div>
              <div className="detail-box">
                <div className="heading_container">
                  <h2 className="mx-auto">Nuestra Visión</h2>
                </div>
                <p className="text-center">
                  Llegar a todas las personas con la palabra de Dios, así como
                  también esas personas puedan tener una transformacion y vida
                  nueva por medio del Espíritu Santo para que con ello puedan
                  testificar del amor de Dios al mundo.
                </p>
              </div>
              <div className="detail-box text-center">
                <div className="heading_container">
                  <h2 className="mx-auto">Nuestros Valores</h2>
                </div>
                <p className="text-center">
                  Honestidad <br />
                  Sinceridad <br />
                  Transparencia <br />
                  Amor <br />
                  Compañerismo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HeroLayout>
  );
}
