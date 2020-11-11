import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function NotFoundPage(props) {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} siteTitle={siteTitle}>
      <SEO title='404: Not Found' />
      <h1 className="title">Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness <span role="img" aria-label="emoji">😢</span>.</p>
    </Layout>
  )
};

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
