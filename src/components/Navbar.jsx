import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-semibold">Permutia</div>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/impressum" className="hover:underline">Impressum</a></li>
        <li><a href="/datenschutz" className="hover:underline">Datenschutz</a></li>
      </ul>
    </nav>
  );
}
