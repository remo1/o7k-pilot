'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../home-hero';
import HomeFAQs from '../home-faqs';
import WhoWeAre from '../../_marketing/services/who-we-are';
import MarketingContactFormSection from '../home-contact-form';
import StepByStep from '../../_marketing/services/step-by-step';
import ElearningAboutCoreValues from '../../_elearning/about/elearning-about-core-values';
import MarketingLandingServices from '../../_marketing/landing/marketing-landing-services';
import MarketingServicesBenefits from '../../_marketing/services/marketing-services-benefits';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <WhoWeAre />

      <MarketingLandingServices />

      <ElearningAboutCoreValues />

      <StepByStep />

      <MarketingServicesBenefits />

      <HomeFAQs />

      <MarketingContactFormSection />
    </>
  );
}
