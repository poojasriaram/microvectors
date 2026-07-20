import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

import Home from './pages/Home';

const BookConsultation = lazy(() => import('./pages/BookConsultation'));
const Crypto = lazy(() => import('./pages/Crypto'));
const Outcomes = lazy(() => import('./pages/Outcomes'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Capabilities = lazy(() => import('./pages/Capabilities'));
const Industries = lazy(() => import('./pages/Industries'));
const Offerings = lazy(() => import('./pages/Offerings'));
const Resources = lazy(() => import('./pages/Resources'));
const Company = lazy(() => import('./pages/Company'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Security = lazy(() => import('./pages/Security'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Copyright = lazy(() => import('./pages/Copyright'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const DemandPulse = lazy(() => import('./pages/DemandPulse'));
const Partners = lazy(() => import('./pages/Partners'));
const Career = lazy(() => import('./pages/Career'));
const TalkToExpert = lazy(() => import('./pages/TalkToExpert'));
const AIDemandDiscovery = lazy(() => import('./pages/AIDemandDiscovery'));
const AILeadGeneration = lazy(() => import('./pages/AILeadGeneration'));
const AILeadNurturing = lazy(() => import('./pages/AILeadNurturing'));
const AIMVPValidation = lazy(() => import('./pages/AIMVPValidation'));
const AILeadSalesTransformation = lazy(() => import('./pages/AILeadSalesTransformation'));
const AIRevenueOperations = lazy(() => import('./pages/AIRevenueOperations'));
const AIRevenueAcceleration = lazy(() => import('./pages/AIRevenueAcceleration'));
const BehaviourAnalytics = lazy(() => import('./pages/BehaviourAnalytics'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));

import CookieConsent from './components/CookieConsent';
import TabExitPopup from './components/TabExitPopup';

import { useAnalytics } from '../hooks/useAnalytics';
import { useTrafficAnalysis } from '../hooks/useTrafficAnalysis';
import { useContextAwareChat } from '../hooks/useContextAwareChat';

function AnalyticsTracker() {
  useAnalytics();
  useTrafficAnalysis();
  useContextAwareChat();
  return null;
}

// Fallback loader for lazy pages
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <div className="min-h-screen bg-white pb-20 lg:pb-0">
        <Navigation />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book-consultation" element={<BookConsultation />} />
              <Route path="/crypto" element={<Crypto />} />
              <Route path="/outcomes" element={<Outcomes />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/capabilities" element={<Capabilities />} />
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
              <Route path="/ai-revenue-operations" element={<AIRevenueOperations />} />
              <Route path="/ai-revenue-acceleration" element={<AIRevenueAcceleration />} />
              <Route path="/behaviour-analytics" element={<BehaviourAnalytics />} />
              <Route path="/about" element={<Navigate to="/company" replace />} />
              <Route path="/mission" element={<Navigate to="/company" replace />} />
              <Route path="/leadership" element={<Navigate to="/company" replace />} />
              <Route path="/offices" element={<Navigate to="/company" replace />} />
              <Route path="/careers" element={<Navigate to="/career" replace />} />
              <Route path="/contact" element={<Navigate to="/book-consultation" replace />} />
              <Route path="/explore/:slug" element={<ServiceDetail />} />
              <Route path="/products" element={<Navigate to="/demand-pulse" replace />} />
            </Routes>
          </Suspense>
        </main>

        <ChatBot />
        <CookieConsent />
        <TabExitPopup />
        <Footer />
      </div>
    </Router>
  );
}
