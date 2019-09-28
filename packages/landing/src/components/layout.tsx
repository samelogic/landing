import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'common/src/theme/saas';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Saas/saas.style';
import Navbar from '../containers/Saas/Navbar';
import Footer from '../containers/Saas/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { BodyWrapper } from './layout.style';
import SEO from '../components/seo';

export default ({ children, path }) => {
  return (
    <ThemeProvider theme={saasTheme}>
      <Fragment>
        <SEO title="Samelogic Blog" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar path={path} />
            </DrawerProvider>
          </Sticky>
          <BodyWrapper>{children}</BodyWrapper>
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
