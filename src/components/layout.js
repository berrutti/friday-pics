import React from 'react';
import Header from '../components/header';

class Layout extends React.Component {
  render() {
    const { children, siteTitle, menuLinks } = this.props;
    return (
      <div className="container">
        <Header menuLinks={menuLinks} siteTitle={siteTitle} />
        <main>{children}</main>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              © {new Date().getFullYear()} Friday Pics - Built with {` `} <a href='https://www.gatsbyjs.org'>Gatsby</a> and <a href='https://www.bulma.io'>Bulma</a>
            </p>
          </div>
        </footer>
      </div >
    );
  };
};

export default Layout;