import React from 'react';
import logo from '../assets/Logo.png';
import bundeslaenderImg from '../assets/bundeslaender.jpg';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <img src={logo} alt="Permutia Logo" className="w-48 mb-4" />
      <h1 className="text-3xl font-bold mb-6 text-center">Permutia – Lehrer:innen im Bundesländer-Austausch</h1>
      <img
        src={bundeslaenderImg}
        alt="Übersicht der Bundesländer"
        className="max-w-full h-auto rounded shadow"
      />
    </div>
  );
}