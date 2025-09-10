import { Link } from 'react-router-dom';
import mapImage from '../assets/bundeslaender.jpg';

export default function Home() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Permutia – Lehrer:innen im Bundesländer-Austausch</h1>
      <img src={mapImage} alt="Bundesländer Karte" className="mx-auto w-full max-w-2xl mb-6" />
      <p className="mb-4">Wähle ein Bundesland aus, um mehr Informationen zu sehen:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/bundesland/nrw" className="bg-blue-200 p-4 rounded hover:bg-blue-300 transition">Nordrhein-Westfalen</Link>
      </div>
    </div>
  );
}