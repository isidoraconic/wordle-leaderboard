import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NavBar.css';

export default class NavBar extends React.Component {
  render() {
    return (
        <div className="navbar">
          <div id="navbar-container">
            <NavLink to="/" id="nav-home" className="button-text"><button>Home</button></NavLink>
            <NavLink to="/leaderboard" id="nav-leaderboard" className="button-text"><button>Leaderboard!</button></NavLink>
          </div>
        </div>
    )
  }

}