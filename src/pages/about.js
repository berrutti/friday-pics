import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class About extends React.Component {
  render() {

    return (
      <Layout location={this.props.location} title='About'>
        <SEO title="About" />
        <header>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
          </h3>
        </header>
        <section>
          <p>Hello! You are probably wondering why the hell is this site for.
          The idea was based on <a href="http://www.bildschirmarbeiter.com">Bildschirmarbeiter</a>, which is a german website of general humor.</p>
          <p>They have a weekly picdump that I used to scroll every friday while drinking my morning coffee at the company I used to work in.</p>
          <p>This is my version of that site. The images are pulled from Reddit, from the following subreddit list (It'll probably change in the future):</p>
          <p>
            <a href="https://www.reddit.com/r/CrappyDesign">CrappyDesign</a><br />
            <a href="https://www.reddit.com/r/nocontextpics">nocontextpics</a><br />
            <a href="https://www.reddit.com/r/funny">funny</a><br />
            <a href="https://www.reddit.com/r/funnysigns">funnysigns</a><br />
            <a href="https://www.reddit.com/r/Funnypics">Funnypics</a><br />
            <a href="https://www.reddit.com/r/AdviceAnimals">AdviceAnimals</a><br />
            <a href="https://www.reddit.com/r/pics">pics</a><br />
            <a href="https://www.reddit.com/r/hmmm">hmmm</a><br />
            <a href="https://www.reddit.com/r/Eyebleach">Eyebleach</a><br />
          </p>
          <p>Original posters (OP) are credited on the image tooltips and every image has a link to the original Reddit post.
          If you are the creator of one of these images and want it removed, please contact me and I'll gladly take it down.
          </p>
          <p>Thanks and have fun!</p>
        </section>
      </Layout>
    )
  }
}

export default About
