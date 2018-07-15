import React, { Component } from 'react';

import logo from '../assets/images/logo.jpg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header display--flex">
        <img src={logo} className="header__logo" alt="logo" />
        </header>
    );
  }
}

export default Header;
