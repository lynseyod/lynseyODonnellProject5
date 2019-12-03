import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      comingSoon: false,
    }
  }

  handleClick = () => {
    this.setState({
      comingSoon: true
    });
  }

  render() {
    return(
      <header>
        <nav>
          <p className="logo">rolling index</p>
          <ul>
            <li><a>Sign in</a></li>
            <li><p>/</p></li>
            <li><a>Sign up</a></li>
          </ul>
        </nav>
        <h1>rolling index</h1>
      </header>
    )
  }
}

export default Header;