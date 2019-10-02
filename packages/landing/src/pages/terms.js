import React from 'react';
import SEO from '../components/seo';
import TermsPage from '../containers/TermsPage';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <SEO title="Samelogic | Terms of Service" />
      <TermsPage />
    </Layout>
  );
};
