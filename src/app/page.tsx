import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import WhyUsSection from '@/components/WhyUsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import CtaSection from '@/components/CTASection'; // Sesuaikan nama file (besar/kecil)
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import AdvantagesSection from '@/components/AdvantageSection';

export default function Home() {
  return (
    <div className='font-sans text-gray-900 scroll-smooth'>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <WhyUsSection />
        <ServicesSection />
        <AdvantagesSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
