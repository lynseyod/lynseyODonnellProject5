import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <header>
        <nav>
          <p className="logo">addy</p>
          <ul>
            <li><a href="#">Sign in</a></li>
            <li><p>/</p></li>
            <li><a href="#">Sign up</a></li>
          </ul>
        </nav>
        <h1>Lynsey's addy</h1>
      </header>
    )
  }
}

export default Header;