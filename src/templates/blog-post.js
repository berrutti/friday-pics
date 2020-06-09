import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ulStyle = {
  display: `flex`,
  flexWrap: `wrap`,
  justifyContent: `space-between`,
  listStyle: `none`,
  padding: 0,
};

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notificationVisible: true };
  }

  handleDeleteClick = () => {
    this.setState({ notificationVisible: false });
  }

  render() {
    debugger;
    const post = this.props.data.markdownRemark;
    const title = post.frontmatter.title;
    const image = post.frontmatter.image;
    const menuLinks = this.props.data.site.siteMetadata.menuLinks;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} siteTitle={title} menuLinks={menuLinks}>
        <SEO title={title} image={image} />
        {this.state.notificationVisible && <div className="notification is-info">
          <button className="delete" onClick={this.handleDeleteClick}></button>
          You can hover the images to read the picture titles
          </div>}
        <section>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr style={{ marginBottom: 10 }} />
        </section>

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
