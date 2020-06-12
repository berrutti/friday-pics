import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <nav className="navbar is-info" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <p className="title navbar-item">{siteTitle}</p>
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">
        <Link className="navbar-item" to={'/'}>
          Home
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;