type HeroProps = {
  bookingUrl: string;
};

export function Hero({ bookingUrl }: HeroProps) {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="eyebrow">Premium barber studio</p>
        <h1>Стрижки, бритьё и мужской стиль в атмосфере своего клуба</h1>
        <p className="hero-text">
          Современный барбершоп в тёмной эстетике Buddies & Co: точная работа мастеров, честный сервис и
          спокойное пространство для тех, кто ценит детали.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">
            Записаться
          </a>
          <a className="button button-secondary" href="#services">
            Смотреть услуги
          </a>
        </div>
      </div>
      <div className="hero-panel" aria-hidden="true">
        <span>Since 2026</span>
        <strong>Clean cuts. Sharp fades. Real service.</strong>
      </div>
    </section>
  );
}
