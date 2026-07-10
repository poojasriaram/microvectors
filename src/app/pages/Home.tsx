import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseSection from '../components/home/WhyChooseSection';
import IndustriesSection from '../components/home/IndustriesSection';
import ProcessTimeline from '../components/home/ProcessTimeline';
import TechStack from '../components/home/TechStack';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FinalCTASection from '../components/home/FinalCTASection';

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <main className="bg-background min-h-screen overflow-hidden">
            <HeroSection />
            <ServicesOverview />
            <WhyChooseSection />
            <IndustriesSection />
            <ProcessTimeline />
            <TechStack />
            <TestimonialsSection />
            <FinalCTASection />
        </main>
    );
}
