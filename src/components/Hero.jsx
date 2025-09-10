// src/components/Hero.jsx
import heroImage from '../assets/bundeslaender.jpg';

export default function Hero() {
  return (
    <section className="relative bg-gray-100">
      <img src={heroImage} alt="Deutschland" className="w-full h-96 object-cover opacity-80" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-80 p-6 rounded shadow text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Lehrer:innen im Bundesländer-Austausch</h1>
          <p className="mt-4 text-lg text-gray-700">Permutia macht den Wechsel einfacher.</p>
        </div>
      </div>
    </section>
  );
}