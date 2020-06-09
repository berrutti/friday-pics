import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle, menuLinks }) => (
  <nav className="navbar is-info">
    <div className="navbar-brand">
      <h1 className="navbar-item">
        {siteTitle}
      </h1>
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">
        {menuLinks.map(link => (
          <div key={link.name} className="navbar-item is-hoverable">
            <h3>
              <Link style={{ color: 'white' }} to={link.link}>{link.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  </nav>
);

export default Header;