const footerLinks = [
  { label: 'Главная', href: '#home' },
  { label: 'Услуги', href: '#services' },
  { label: 'Мастера', href: '#masters' },
  { label: 'Академия', href: '#academy' },
  { label: 'Контакты', href: '#contacts' },
];

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand" href="#home" aria-label="Buddies Barbershop">
          <span className="brand-mark">B</span>
          <span>Buddies Barbershop</span>
        </a>
        <p>Мужские стрижки, борода, бритьё и академия барберинга.</p>
      </div>
      <nav aria-label="Навигация в футере">
        {footerLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="socials">
        <a href="https://t.me/example_barber" target="_blank" rel="noreferrer">
          Telegram
        </a>
        <a href="https://wa.me/79991234567" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <span>© 2026 Buddies Barbershop</span>
      </div>
    </footer>
  );
}
