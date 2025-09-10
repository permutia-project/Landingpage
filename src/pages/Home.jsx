// src/pages/Home.jsx
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import CTA from '../components/CTA';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <InfoSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;