import React from 'react';
import { Link } from 'gatsby';

const containerStyle = {
  color: 'white',
  background: '#007acc',
  margin: '0px',
  maxWidth: 960,
  padding: '10px',
  display: 'flex',
  justifyItems: 'space-between',
  alignItems: 'center',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const h3Style = {
  margin: 0,
  padding: 0,
  paddingLeft: '10px',
  color: 'white',
  listStyleType: `none`,
};

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <div style={containerStyle}>
      <h1 style={{ margin: 0, padding: 0, flex: 1 }}>
        {siteTitle}
      </h1>
      {menuLinks.map(link => (
        <h3 style={h3Style} key={link.name} >
          <Link style={linkStyle} to={link.link}>{link.name}</Link>
        </h3>
      ))}
    </div>
  </header>
);

export default Header;