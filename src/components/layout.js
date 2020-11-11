import React from 'react';
import Header from '../components/header';
import { Link } from "gatsby"

function Layout(props) {
  const { children, siteTitle, previous, next } = props;
  const footerLinkStyle = {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `space-between`,
    listStyle: `none`,
    padding: 0,
  };

  return (
    <div className="container">
      <Header siteTitle={siteTitle} />
      <main>{children}</main>
      <footer className="footer">
        <div className="content has-text-centered">
          <ul style={footerLinkStyle}>
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
          <p>
            © {new Date().getFullYear()} Friday Pics - Built with {` `} <a href='https://www.gatsbyjs.org'>Gatsby</a> and <a href='https://www.bulma.io'>Bulma</a>
          </p>
        </div>
      </footer>
    </div >
  );
};

export default Layout;