'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from "../home-hero";
import MarketingServices from "../../_marketing/services/marketing-services";
import ElearningAboutCoreValues from "../../_elearning/about/elearning-about-core-values";
import MarketingLandingServices from "../../_marketing/landing/marketing-landing-services";
import MarketingServicesBenefits from "../../_marketing/services/marketing-services-benefits";
import MarketingServicesHowItWork from "../../_marketing/services/marketing-services-how-it-work";
import MarketingLandingFaqs from "../../_marketing/landing/marketing-landing-faqs";
import HomeFAQs from "../home-faqs";

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <MarketingServices />

      <MarketingLandingServices />

      <ElearningAboutCoreValues />

      <MarketingServicesHowItWork />

      <MarketingServicesBenefits />

      <HomeFAQs />


      {/* <MarketingServicesInclude /> */}


      {/* <HomeNewStart /> */}

      {/* <HomeFlexibleComponents /> */}

      {/* <HomeFeatureHighlights /> */}

      {/* <HomeForDesigner /> */}

      {/* <PricingHome plans={_pricingHome} /> */}

      {/* <HomeFAQs /> */}

      {/* <HomeCombination /> */}

      {/* <HomeAdvertisement /> */}
    </>
  );
}
