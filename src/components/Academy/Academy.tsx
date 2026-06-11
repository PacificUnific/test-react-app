import { courses } from '../../data/courses';

type AcademyProps = {
  bookingUrl: string;
};

export function Academy({ bookingUrl }: AcademyProps) {
  return (
    <section className="section academy" id="academy">
      <div className="section-heading">
        <p className="eyebrow">Академия</p>
        <h2>Академия барберинга</h2>
        <p>
          Учим профессии на практике: от уверенной работы с инструментом до сервиса, который помогает
          мастеру расти и собирать свою клиентскую базу.
        </p>
      </div>
      <div className="cards-grid">
        {courses.map((course) => (
          <article className="card course-card" key={course.title}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <strong>{course.price}</strong>
            <a className="text-link" href={bookingUrl} target="_blank" rel="noreferrer">
              Оставить заявку
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
