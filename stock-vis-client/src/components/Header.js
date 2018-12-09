import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <nav className="navbar-fixed">
          <div className="nav-wrapper grey darken-2">
            <a href="/" className="brand-logo">
              <i className="fa fa-line-chart material-icons" aria-hidden="true" />
              Stock Chart
            </a>
          </div>
      </nav>
      )
  }
}

export default Header;
