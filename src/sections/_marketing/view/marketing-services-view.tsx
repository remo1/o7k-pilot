'use client';

import { _testimonials, _marketingPosts } from 'src/_mock';

import MarketingNewsletter from '../marketing-newsletter';
import WhoWeAre from '../services/who-we-are';
import MarketingServicesHero from '../services/marketing-services-hero';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import MarketingServicesInclude from '../services/marketing-services-include';
import MarketingServicesBenefits from '../services/marketing-services-benefits';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import MarketingServicesHowItWork from '../services/marketing-services-how-it-work';

// ----------------------------------------------------------------------

export default function MarketingServicesView() {
  return (
    <>
      <MarketingServicesHero />

      <WhoWeAre />

      <MarketingServicesInclude />

      <MarketingServicesBenefits />

      <MarketingServicesHowItWork />

      <MarketingTestimonial testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
