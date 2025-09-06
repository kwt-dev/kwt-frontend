export const metadata = {
  title: 'Home - Stellar',
  description: 'Page description',
};

import Hero from '@/components/hero';
import ServicesSection from '@/components/services-section';
import Features from '@/components/features';
// New custom sections for King's redesign
import ServicesShowcase from '@/components/services-showcase';
import KingsDifference from '@/components/kings-difference';
import HeatReality from '@/components/heat-reality';
import TrustSocialProof from '@/components/trust-social-proof';
import Faqs from '@/components/faqs';
import FinalCta from '@/components/final-cta';

export default function Home() {
  return (
    <>
      <Hero />
      {/* Mini services directly below hero */}
      <ServicesSection />

      {/* Appointment stepper placeholder - keep as provided */}
      <Features />

      {/* Main services showcase (large panel with tabs) */}
      <ServicesShowcase />

      {/* King's Difference stats & narrative */}
      <KingsDifference />

      {/* Heat & Damage Reality panel */}
      <HeatReality />

      {/* Trust & Social Proof strip */}
      <TrustSocialProof />

      {/* FAQs populated with client copy */}
      <Faqs />

      {/* Final conversion CTA */}
      <FinalCta />
    </>
  );
}
