import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const ulStyle = {
  display: `flex`,
  flexWrap: `wrap`,
  justifyContent: `space-between`,
  listStyle: `none`,
  padding: 0,
};

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const title = post.frontmatter.title;
    const image = post.frontmatter.image;
    const menuLinks = this.props.data.site.siteMetadata.menuLinks;
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} siteTitle={title} menuLinks={menuLinks}>
        <SEO title={title} image={image}/>
        <h4>You can hover the images to read the picture titles</h4>
        <article>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr style={{ marginBottom: rhythm(1)}}/>
        </article>

        <nav>
          <ul style={ulStyle}>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
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
