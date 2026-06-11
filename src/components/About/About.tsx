const advantages = [
  'Опытные мастера',
  'Мужская атмосфера',
  'Удобная запись',
  'Качественный сервис',
];

export function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <p className="eyebrow">О нас</p>
        <h2>Барбершоп, куда возвращаются за формой, настроением и вниманием к деталям</h2>
      </div>
      <div className="about-grid">
        <p>
          Buddies Barbershop делает мужские стрижки, fade, бороду и классическое бритьё без лишней суеты.
          Мы держим высокий стандарт сервиса, работаем по записи и подбираем образ под ритм жизни клиента.
        </p>
        <div className="advantage-grid">
          {advantages.map((advantage) => (
            <div className="advantage-card" key={advantage}>
              {advantage}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
