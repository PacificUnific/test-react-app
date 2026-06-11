type HeaderProps = {
  bookingUrl: string;
};

const navItems = [
  { label: 'Главная', href: '#home' },
  { label: 'Услуги', href: '#services' },
  { label: 'Мастера', href: '#masters' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Академия', href: '#academy' },
  { label: 'Контакты', href: '#contacts' },
];

export function Header({ bookingUrl }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Buddies Barbershop">
        <span className="brand-mark">B</span>
        <span>Buddies Barbershop</span>
      </a>
      <nav className="main-nav" aria-label="Основная навигация">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="button button-primary header-action" href={bookingUrl} target="_blank" rel="noreferrer">
        Записаться
      </a>
    </header>
  );
}
