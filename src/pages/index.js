import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import "./styles.scss"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} siteTitle={siteTitle}>
        <SEO title='All dumps' />
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical is-4">
            <article className="tile is-child box">
              <aside className="menu">
                <p className="menu-label">
                  Latest dumps
                </p>
                <ul className="menu-list">
                  {posts.map(({ node }) => {
                    const title = node.frontmatter.title;
                    return (<li key={node.fields.slug}><Link to={node.fields.slug}>{title}</Link></li>);
                  })}
                </ul>
              </aside>
            </article>
          </div>
          <div className="tile is-parent is-vertical is-8">
            <article className="content tile is-child is-medium box">
              <p><strong>Hello!</strong> You are probably wondering what the hell is this site for. The idea was based on <a href='https://www.bildschirmarbeiter.com'>Bildschirmarbeiter</a>, which is a german website of general humor.</p>
              <p>They have a weekly picdump that I used to scroll every Friday while drinking my morning coffee at the company I used to work in.</p>
              <p>This is my version of that site. The images are pulled from <a href="https://www.reddit.com/">Reddit</a>, from the following subreddit list (You want another? Make a PR!):</p>
              <hr />
              <ul>
                <li><a href='https://www.reddit.com/r/CrappyDesign'>CrappyDesign</a></li>
                <li><a href='https://www.reddit.com/r/nocontextpics'>nocontextpics</a></li>
                <li><a href='https://www.reddit.com/r/funny'>funny</a></li>
                <li><a href='https://www.reddit.com/r/funnysigns'>funnysigns</a></li>
                <li><a href='https://www.reddit.com/r/Funnypics'>Funnypics</a></li>
                <li><a href='https://www.reddit.com/r/AdviceAnimals'>AdviceAnimals</a></li>
                <li><a href='https://www.reddit.com/r/pics'>pics</a></li>
                <li><a href='https://www.reddit.com/r/hmmm'>hmmm</a></li>
                <li><a href='https://www.reddit.com/r/Eyebleach'>Eyebleach</a></li>
                <li><a href='https://www.reddit.com/r/memes'>memes</a></li>
              </ul>
              <hr />
              <p>Original posters (OPs) are credited. If you are the creator of one of these images and want it removed, please <a href='mailto:berrutti@gmail.com'>contact me</a>, and I'll gladly take it down. </p>
              <p>If you want to take a look at the scrapper, you can do so on this repository: <a href='https://github.com/berrutti/friday-pics-bot'>https://github.com/berrutti/friday-pics-bot</a>.</p>
              <p><strong>Thanks and have fun!</strong></p>
            </article>
          </div>
        </div>
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
