import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NavBar.css';

export default class NavBar extends React.Component {
  render() {
    return (
        <div className="navbar">
          <div id="navbar-container">
            <NavLink to="/" id="nav-home"><button>Home</button></NavLink>
            <NavLink to="/leaderboard" id="nav-leaderboard"><button>Leaderboard!</button></NavLink>
          </div>
        </div>
    )
  }

}