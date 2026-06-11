type ContactsProps = {
  bookingUrl: string;
};

export function Contacts({ bookingUrl }: ContactsProps) {
  return (
    <section className="section contacts" id="contacts">
      <div className="section-heading">
        <p className="eyebrow">Контакты</p>
        <h2>Загляните на стрижку или напишите нам в мессенджер</h2>
      </div>
      <div className="contacts-grid">
        <div className="contact-details">
          <p>
            <span>Адрес</span>
            Москва, ул. Примерная, 12
          </p>
          <p>
            <span>Телефон</span>
            +7 999 123-45-67
          </p>
          <p>
            <span>Режим работы</span>
            Ежедневно 10:00-22:00
          </p>
          <div className="contact-actions">
            <a className="button button-secondary" href="https://wa.me/79991234567" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="button button-secondary" href="https://t.me/example_barber" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer">
              Записаться онлайн
            </a>
          </div>
        </div>
        <div className="map-placeholder" aria-label="Место для карты">
          <span>Map placeholder</span>
        </div>
      </div>
    </section>
  );
}
