// src/components/InfoSection.jsx
export default function InfoSection() {
  return (
    <section className="py-12 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Verstehen</h3>
          <p className="text-gray-600 mt-2">Alle Regeln & Unterschiede der Bundesländer verständlich erklärt.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Vergleichen</h3>
          <p className="text-gray-600 mt-2">Was bedeutet ein Wechsel konkret für mich?</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Vernetzen</h3>
          <p className="text-gray-600 mt-2">Finde Tauschpartner:innen oder bleibe mit Kolleg:innen im Kontakt.</p>
        </div>
      </div>
    </section>
  );
}