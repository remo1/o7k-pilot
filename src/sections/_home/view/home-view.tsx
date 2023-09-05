'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../home-hero';
import HomeFAQs from '../home-faqs';
import Contact from '../home-contact-form';
import WhoWeAre from '../../_marketing/services/who-we-are';
import StepByStep from '../../_marketing/services/step-by-step';
import Price from '../../_marketing/services/marketing-services-benefits';
import Features from '../../_elearning/about/elearning-about-core-values';
import Benefits from '../../_marketing/landing/marketing-landing-services';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <WhoWeAre />

      <Benefits />

      <Features />

      <StepByStep />

      <Price />

      <HomeFAQs />

      <Contact />
    </>
  );
}
