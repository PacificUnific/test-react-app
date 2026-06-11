import { services } from '../../data/services';

type ServicesProps = {
  bookingUrl: string;
};

export function Services({ bookingUrl }: ServicesProps) {
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <p className="eyebrow">Услуги и цены</p>
        <h2>Базовые услуги для аккуратного образа каждый день</h2>
      </div>
      <div className="cards-grid">
        {services.map((service) => (
          <article className="card service-card" key={service.title}>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="card-footer">
              <strong>{service.price}</strong>
              <a className="text-link" href={bookingUrl} target="_blank" rel="noreferrer">
                Записаться
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
