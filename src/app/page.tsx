import HeroLayout from '@/components/HeroLayout';
import HeroSlider from '@/components/HeroSlider';
import OfferSection from '@/components/OfferSection';
import ArticlesSection from '@/components/ArticlesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';

/**
 * Home page - Following KISS principle
 * Composed of small, focused components
 */
export default function Home() {
  return (
    <>
      <HeroLayout>
        <HeroSlider />
      </HeroLayout>

      <OfferSection />
      <ArticlesSection />
      <AboutSection />
      <ContactSection />
      <TestimonialsSection />
    </>
  );
}
