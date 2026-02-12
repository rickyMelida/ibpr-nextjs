import Link from 'next/link';

/**
 * About section component - "Dios es amor"
 * Single Responsibility: Display about/faith section
 */
export default function AboutSection() {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src="/images/faith.png" alt="Fe en Cristo" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Dios es amor</h2>
              </div>
              <p>
                Porque de tal manera amó Dios al mundo, que ha dado a su Hijo
                unigénito, para que todo aquel que en él cree, no se pierda, mas
                tenga vida eterna. <br />
                <cite>Juan 3:16</cite>
              </p>
              <Link href="/nosotros">Conocer mas</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
