import { Link } from 'react-router-dom';

export default function NRW() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Nordrhein-Westfalen</h2>
      <p className="mb-4">Hier findest du demnächst Informationen zu Anträgen, Formularen und Ansprechpartner:innen für einen Wechsel nach NRW.</p>
      <Link to="/" className="text-blue-600 hover:underline">Zurück zur Übersicht</Link>
    </div>
  );
}