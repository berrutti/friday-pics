import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const menuLinks = data.site.siteMetadata.menuLinks;
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} siteTitle={siteTitle} menuLinks={menuLinks}>
        <SEO title='All dumps' />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title;
          return (
            <section key={node.fields.slug}>
              <Link to={node.fields.slug}>
                <h4 className="post">{title}</h4>
              </Link>
              <Link to={node.fields.slug}>
                <img className="post-img" title={`Click to browse images from ${title}`} src={node.frontmatter.image} alt={node.frontmatter.title}></img>
              </Link>
              <hr ></hr>
            </section>
          )
        })}
      </Layout>
    )
  }
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image
          }
        }
      }
    }
  }
`;
