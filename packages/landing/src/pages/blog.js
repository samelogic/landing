import React from 'react';
import BlogPage from '../containers/BlogPage';
import SEO from '../components/seo';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <SEO title="Samelogic Blog" />
      <BlogPage />
    </Layout>
  );
};
