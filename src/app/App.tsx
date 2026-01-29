import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { MessagesSquare } from 'lucide-react';
import Home from './pages/Home';
import BookDemo from './pages/BookDemo';
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
import Partners from './pages/Partners';
import Career from './pages/Career';
import TalkToExpert from './pages/TalkToExpert';
import AIDemandDiscovery from './pages/AIDemandDiscovery';
import AILeadGeneration from './pages/AILeadGeneration';
import AILeadNurturing from './pages/AILeadNurturing';
import AIMVPValidation from './pages/AIMVPValidation';
import AILeadSalesTransformation from './pages/AILeadSalesTransformation';
import CookieConsent from './components/CookieConsent';



import { useTrafficAnalysis } from '../hooks/useTrafficAnalysis';

function TrafficTracker() {
  useTrafficAnalysis();
  return null;
}

export default function App() {
  return (
    <Router>
      <TrafficTracker />
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book-demo" element={<BookDemo />} />
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
            <Route path="/partners" element={<Partners />} />
            <Route path="/career" element={<Career />} />
            <Route path="/talk-to-expert" element={<TalkToExpert />} />
            <Route path="/ai-demand-discovery" element={<AIDemandDiscovery />} />
            <Route path="/ai-lead-generation" element={<AILeadGeneration />} />
            <Route path="/ai-lead-nurturing" element={<AILeadNurturing />} />
            <Route path="/ai-mvp-validation" element={<AIMVPValidation />} />
            <Route path="/ai-lead-sales-transformation" element={<AILeadSalesTransformation />} />
            <Route path="/products" element={<Navigate to="/demand-pulse" replace />} />

          </Routes>
        </main>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919513288612"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/30 transition-all hover:scale-110 duration-300 flex items-center justify-center group"
          aria-label="Contact us on WhatsApp"
        >
          <MessagesSquare className="w-7 h-7" />
          <span className="absolute right-full mr-3 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </a>

        <CookieConsent />
        <Footer />
      </div>
    </Router >
  );
}