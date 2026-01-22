import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookDemo from './pages/BookDemo';
import Verticals from './pages/Verticals';
import Crypto from './pages/Crypto';
import Outcomes from './pages/Outcomes';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Offerings from './pages/Offerings';
import Resources from './pages/Resources';
import Company from './pages/Company';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Security from './pages/Security';
import Cookies from './pages/Cookies';

import Copyright from './pages/Copyright';
import Sitemap from './pages/Sitemap';
import DemandPulse from './pages/DemandPulse';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/verticals" element={<Verticals />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/outcomes" element={<Outcomes />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/company" element={<Company />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/security" element={<Security />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/copyright" element={<Copyright />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/demand-pulse" element={<DemandPulse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}