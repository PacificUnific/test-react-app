import { About } from './components/About/About';
import { Academy } from './components/Academy/Academy';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import { Gallery } from './components/Gallery/Gallery';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Masters } from './components/Masters/Masters';
import { Services } from './components/Services/Services';

export const bookingUrl = 'https://example.com/booking';

function App() {
  return (
    <>
      <Header bookingUrl={bookingUrl} />
      <main>
        <Hero bookingUrl={bookingUrl} />
        <About />
        <Services bookingUrl={bookingUrl} />
        <Masters bookingUrl={bookingUrl} />
        <Gallery />
        <Academy bookingUrl={bookingUrl} />
        <Contacts bookingUrl={bookingUrl} />
      </main>
      <Footer />
    </>
  );
}

export default App;
