import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import NavigateToTop from "../components/NavigateToTop"
import SEO from "../components/seo"
import "../styles/global.scss"

function BlogPostTemplate(props) {
  const { location, pageContext } = props;
  const { frontmatter, html } = props.data.markdownRemark;
  const { title, image } = frontmatter;
  const { previous, next } = pageContext;

  return (
    <>
      <Layout location={location} siteTitle={title} previous={previous} next={next}>
        <SEO title={title} image={image} />
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <NavigateToTop></NavigateToTop>
      </Layout>
    </>
  )
}


export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image
      }
    }
  }
`;
