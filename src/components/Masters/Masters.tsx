import { masters } from '../../data/masters';

type MastersProps = {
  bookingUrl: string;
};

export function Masters({ bookingUrl }: MastersProps) {
  return (
    <section className="section" id="masters">
      <div className="section-heading">
        <p className="eyebrow">Мастера</p>
        <h2>Команда, которая слышит задачу и держит форму</h2>
      </div>
      <div className="cards-grid masters-grid">
        {masters.map((master, index) => (
          <article className="card master-card" key={master.name}>
            <div className={`master-photo master-photo-${index + 1}`} aria-hidden="true" />
            <h3>{master.name}</h3>
            <p>{master.specialization}</p>
            <span>{master.experience}</span>
            <a className="button button-secondary" href={bookingUrl} target="_blank" rel="noreferrer">
              Записаться к мастеру
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
