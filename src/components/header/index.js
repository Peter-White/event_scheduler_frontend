import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav className="navbar navbar-light navbar-bg-light">
          <NavLink className="navbar-brand" to="/">Schedule an Event</NavLink>
          <NavLink className="navbar-brand" to="/display">Display Events</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
