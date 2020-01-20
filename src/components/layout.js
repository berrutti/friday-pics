import React from 'react';
import Header from '../components/header';

import { rhythm } from '../utils/typography';

const divStyle = {
  marginLeft: `auto`,
  marginRight: `auto`,
  maxWidth: rhythm(24),
  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
};

class Layout extends React.Component {
  render() {
    const { children, siteTitle, menuLinks } = this.props;
    return (
      <div style={divStyle}>
        <Header menuLinks={menuLinks} siteTitle={siteTitle} />
        <main>{children}</main>
        <footer> © {new Date().getFullYear()} Friday Pics - Built with {` `} <a href='https://www.gatsbyjs.org'>Gatsby</a></footer>
      </div>
    );
  };
};

export default Layout;