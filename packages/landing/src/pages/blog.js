import React from 'react';
import BlogPage from '../containers/BlogPage';
import SEO from '../components/seo';
import Layout from '../components/layout';

export default ({ path }) => {
  return (
    <Layout path={path}>
      <SEO title="Samelogic Blog" />
      <BlogPage />
    </Layout>
  );
};
