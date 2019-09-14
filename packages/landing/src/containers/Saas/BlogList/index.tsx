import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import Particles from '../Particle';
import { useStaticQuery, graphql, Link } from 'gatsby';
import BannerWrapper, { DiscountLabel, BannerObject } from './blogList.style';

import BannerObject1 from 'common/src/assets/image/saas/banner/bannerObject1.png';
import BannerObject2 from 'common/src/assets/image/saas/banner/bannerObject2.png';

const BlogList = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle
}) => {
  const Data = useStaticQuery(graphql`
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
  `);
  const blogPosts = Data.allContentfulPost.edges;
  return (
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
  );
};

BlogList.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object
};

BlogList.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center'
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%']
  },
  title: {
    fontSize: ['22px', '34px', '30px', '55px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.5'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0'
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg'
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#5167db',
    ml: '18px'
  },
  discountAmount: {
    fontSize: '14px',
    color: '#eb4d4b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    fontWeight: 700
  },
  discountText: {
    fontSize: ['13px', '14px'],
    color: '#0f2137',
    mb: 0,
    as: 'span',
    fontWeight: 500
  }
};

export default BlogList;
