import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600 mt-16">
      <p>
        <Link to="/impressum" className="underline hover:text-black">Impressum</Link> |{' '}
        <Link to="/datenschutz" className="underline hover:text-black">Datenschutz</Link>
      </p>
    </footer>
  );
}
