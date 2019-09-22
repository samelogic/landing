import React from 'react';
import BannerSection from '../containers/Saas/BannerSection';
import FeatureSection from '../containers/Saas/FeatureSection';
import VisitorSection from '../containers/Saas/VisitorSection';
import ServiceSection from '../containers/Saas/ServiceSection';
import FaqSection from '../containers/Saas/FaqSection';
import PricingSection from '../containers/Saas/PricingSection';
import TrialSection from '../containers/Saas/TrialSection';
import TimelineSection from '../containers/Saas/TimelineSection';
import TestimonialSection from '../containers/Saas/TestimonialSection';
import PartnerSection from '../containers/Saas/PartnerSection';
import SEO from '../components/seo';
import Layout from '../components/layout';

export default ({ path }) => {
  return (
    <Layout path={path}>
      <SEO title="Samelogic | Agile experiments in your SaaS products" />

      <BannerSection />
      <FeatureSection />
      <VisitorSection />
      <ServiceSection />
      <PricingSection />
      <TestimonialSection />
      <PartnerSection />
      <TimelineSection />
      <FaqSection />
      <TrialSection />
    </Layout>
  );
};
