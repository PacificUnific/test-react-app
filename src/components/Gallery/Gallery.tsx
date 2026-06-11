import { gallery } from '../../data/gallery';

export function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="section-heading">
        <p className="eyebrow">Галерея</p>
        <h2>Работы, детали интерьера и атмосфера зала</h2>
      </div>
      <div className="gallery-grid">
        {gallery.map((item) => (
          <div className={`gallery-item gallery-${item.tone}`} key={item.title}>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
