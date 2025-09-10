import React from 'react';
import logo from '../assets/Logo.png'; // Großgeschrieben!

function Home() {
  return (
    <div className="text-center">
      <img
        src={logo}
        alt="Permutia Logo"
        className="w-16 h-auto mx-auto my-4"
        style={{ maxWidth: '64px' }} // zusätzlich zur Absicherung
      />
      <h1 className="text-3xl font-bold mt-4">
        Permutia – Lehrer:innen im Bundesländer-Austausch
      </h1>
    </div>
  );
}

export default Home;