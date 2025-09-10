// src/components/CTA.jsx
export default function CTA() {
  return (
    <section className="bg-blue-50 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Möchtest du mitmachen?</h2>
      <p className="mt-2 text-gray-600">Melde dich kostenlos an und erfahre als Erste:r, wenn das Matching live geht.</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Jetzt vormerken
      </button>
    </section>
  );
}