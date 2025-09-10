import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Footer from './components/Footer';// Your custom Permutia React code will go here.
export default function App(function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            {/* Deine bisherigen Seiten */}
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}) { return <div>Permutia – Lehrer:innen im Bundesländer-Austausch</div>; }
