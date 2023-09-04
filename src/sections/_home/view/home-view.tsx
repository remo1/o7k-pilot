'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';

import HomeFAQs from '../home-faqs';
import HomeHero from '../home-hero';
import WhoWeAre from '../../_marketing/services/who-we-are';
import Contact from '../home-contact-form';
import StepByStep from '../../_marketing/services/step-by-step';
import Benefits from '../../_marketing/landing/marketing-landing-services';
import Features from '../../_elearning/about/elearning-about-core-values';
import Price from '../../_marketing/services/marketing-services-benefits';

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
