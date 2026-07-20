import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import TrustedBySection from '../components/home/TrustedBySection';
import ServicesOverview from '../components/home/ServicesOverview';
import CryptoSection from '../components/home/CryptoSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import IndustriesSection from '../components/home/IndustriesSection';
import ProcessTimeline from '../components/home/ProcessTimeline';
import TechStack from '../components/home/TechStack';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import BlogSection from '../components/home/BlogSection';
import FinalCTASection from '../components/home/FinalCTASection';

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <main className="bg-background min-h-screen overflow-hidden flex flex-col pb-0">
            <HeroSection />
            <TrustedBySection />
            <ServicesOverview />
            <CryptoSection />
            <ProcessTimeline />
            <TechStack />
            <CaseStudiesSection />
            <WhyChooseSection />
            <IndustriesSection />
            <BlogSection />
            <FinalCTASection />
        </main>
    );
}
