import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
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
const Pricing = lazy(() => import('./pages/Pricing'));
const AIBrandAcceleration = lazy(() => import('./pages/AIBrandAcceleration'));
const AIReputationAcceleration = lazy(() => import('./pages/AIReputationAcceleration'));
const DiscoveryPage = lazy(() => import('./pages/DiscoveryPage'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));
import TabExitPopup from './components/TabExitPopup';
import { servicesData } from '../data/navigationContent';

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

function NavigateToIndustriesSection() {
  const { slug } = useParams<{ slug: string }>();
  if (slug && servicesData[slug]) {
    return <ServiceDetail />;
  }
  return <Industries />;
}

function NavigateToExploreSection() {
  const { slug } = useParams<{ slug: string }>();
  if (slug && servicesData[slug]) {
    return <ServiceDetail />;
  }
  if (slug?.startsWith('crypto-')) {
    return <Navigate to={`/crypto#${slug}`} replace />;
  }
  return <ServiceDetail />;
}

function NavigateToOfferingSection() {
  const { type, slug } = useParams<{ type: string; slug: string }>();
  if (type === 'b2b' || type === 'b2c' || type === 'ai-growth' || type === 'sales-acceleration') {
    return <Navigate to={`/offerings/${type}#${slug}`} replace />;
  }
  return <DiscoveryPage />;
}

function NavigateToSolutionsSection() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/solutions#${slug}`} replace />;
}

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
              <Route path="/solutions/:slug" element={<NavigateToSolutionsSection />} />
              <Route path="/capabilities" element={<Navigate to="/solutions" replace />} />
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
              <Route path="/ai-demand-discovery" element={<Navigate to="/solutions#ai-demand-discovery" replace />} />
              <Route path="/ai-lead-generation" element={<Navigate to="/offerings/b2b#channel-discovery" replace />} />
              <Route path="/ai-lead-nurturing" element={<Navigate to="/offerings/b2b#demand-discovery" replace />} />
              <Route path="/ai-mvp-validation" element={<Navigate to="/offerings/b2b#product-market-fit-discovery" replace />} />
              <Route path="/ai-lead-sales-transformation" element={<Navigate to="/offerings/b2b#sales-acceleration" replace />} />
              <Route path="/ai-revenue-operations" element={<Navigate to="/solutions#ai-revenue-operations" replace />} />
              <Route path="/ai-revenue-acceleration" element={<Navigate to="/solutions#ai-revenue-acceleration" replace />} />
              <Route path="/behaviour-analytics" element={<BehaviourAnalytics />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/ai-brand-acceleration" element={<Navigate to="/solutions#ai-brand-acceleration" replace />} />
              <Route path="/ai-reputation-acceleration" element={<Navigate to="/solutions#ai-reputation-acceleration" replace />} />
              <Route path="/hidden-revenue-capture" element={<Navigate to="/solutions#hidden-revenue-capture" replace />} />
              <Route path="/about" element={<Navigate to="/company#about" replace />} />
              <Route path="/mission" element={<Navigate to="/company#mission" replace />} />
              <Route path="/leadership" element={<Navigate to="/company#leadership" replace />} />
              <Route path="/offices" element={<Navigate to="/company#offices" replace />} />
              <Route path="/careers" element={<Navigate to="/career" replace />} />
              <Route path="/contact" element={<Navigate to="/book-consultation" replace />} />
              <Route path="/explore/:slug" element={<NavigateToExploreSection />} />
              <Route path="/offerings/profit-pool-discovery" element={<DiscoveryPage />} />
              <Route path="/offerings/profit-pool-discovery/:slug" element={<DiscoveryPage />} />
              <Route path="/offerings/market-discovery" element={<Navigate to="/offerings/profit-pool-discovery/market-discovery" replace />} />
              <Route path="/offerings/demand-discovery" element={<Navigate to="/offerings/profit-pool-discovery/demand-discovery" replace />} />
              <Route path="/offerings/value-discovery" element={<Navigate to="/offerings/profit-pool-discovery/value-discovery" replace />} />
              <Route path="/offerings/channel-discovery" element={<Navigate to="/offerings/profit-pool-discovery/channel-discovery" replace />} />
              <Route path="/offerings/competitive-discovery" element={<Navigate to="/offerings/profit-pool-discovery/competitive-discovery" replace />} />
              <Route path="/offerings/customer-discovery" element={<Navigate to="/offerings/profit-pool-discovery/customer-discovery" replace />} />
              <Route path="/offerings/product-market-fit-discovery" element={<Navigate to="/offerings/profit-pool-discovery/product-market-fit-discovery" replace />} />
              <Route path="/offerings/:type/:slug" element={<NavigateToOfferingSection />} />
              <Route path="/industries/:slug" element={<NavigateToIndustriesSection />} />
              <Route path="/offerings/:slug" element={<DiscoveryPage />} />
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
