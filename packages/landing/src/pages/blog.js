import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'common/src/theme/saas';
import { ResetCSS } from 'common/src/assets/css/style';
import Container from 'common/src/components/UI/Container';
import { GlobalStyle, ContentWrapper } from '../containers/Saas/saas.style';
import Navbar from '../containers/Saas/Navbar';
import Footer from '../containers/Saas/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import SEO from '../components/seo';
import { Link, graphql } from 'gatsby';

export default ({ data }) => {
  const blogPosts = data.allContentfulPost.edges;
  return (
    <ThemeProvider theme={saasTheme}>
      <Fragment>
        <SEO title="Samelogic Blog" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <div style={{ paddingTop: '210px', paddingBottom: '160px' }}>
            <Container>
              <h1>{"Here's a list of all blogposts!"}</h1>
              <div className="blogposts">
                {blogPosts.map(({ node: post }) => (
                  <div key={post.id}>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </div>
                ))}
                <span className="mgBtm__24" />
                <Link to="/">Go back to the homepage</Link>
              </div>
            </Container>
          </div>
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulPost(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          content {
            content
          }
          tags
        }
      }
    }
  }
`;
