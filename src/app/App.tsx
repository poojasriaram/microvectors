import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Outcomes from './pages/Outcomes';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Offerings from './pages/Offerings';
import Resources from './pages/Resources';
import Company from './pages/Company';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/outcomes" element={<Outcomes />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}