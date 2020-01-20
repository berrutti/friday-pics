import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class About extends React.Component {
  render() {
    const { data } = this.props;
    const menuLinks = data.site.siteMetadata.menuLinks;
    return (
      <Layout location={this.props.location} siteTitle='About' menuLinks={menuLinks}>
        <SEO title='About' />
        <header>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
          </h3>
        </header>
        <section>
          <p>Hello! You are probably wondering what the hell is this site for.
            The idea was based on <a href='http://www.bildschirmarbeiter.com'>Bildschirmarbeiter</a>, which is a german website of general humor.</p>
          <p>They have a weekly picdump that I used to scroll every Friday while drinking my morning coffee at the company I used to work in.</p>
          <p>This is my version of that site. The images are pulled from Reddit, from the following subreddit list (It'll probably change in the future):</p>
          <p>
            <a href='https://www.reddit.com/r/CrappyDesign'>CrappyDesign</a><br />
            <a href='https://www.reddit.com/r/nocontextpics'>nocontextpics</a><br />
            <a href='https://www.reddit.com/r/funny'>funny</a><br />
            <a href='https://www.reddit.com/r/funnysigns'>funnysigns</a><br />
            <a href='https://www.reddit.com/r/Funnypics'>Funnypics</a><br />
            <a href='https://www.reddit.com/r/AdviceAnimals'>AdviceAnimals</a><br />
            <a href='https://www.reddit.com/r/pics'>pics</a><br />
            <a href='https://www.reddit.com/r/hmmm'>hmmm</a><br />
            <a href='https://www.reddit.com/r/Eyebleach'>Eyebleach</a><br />
            <a href='https://www.reddit.com/r/memes'>memes</a><br />
          </p>
          <p>Original posters (OPs) are credited on top of the images with a link to the post. The post title is provided as the image title and alternate text.
            If you are the creator of one of these images and want it removed, please <a href='mailto:berrutti@gmail.com'>contact me</a>, and I'll gladly take it down.
          </p>
          <p>
            If you want to take a look at the scrapper, you can do so on this repository: <a href='https://github.com/berrutti/friday-pics-bot'>https://github.com/berrutti/friday-pics-bot</a>.
          </p>
          <p>Thanks and have fun!</p>
        </section>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`;
