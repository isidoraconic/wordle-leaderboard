import React from 'react';
import '../style/Home.css';

export default class Home extends React.Component {
  render() {
    return (
        <div className="home">
          <h1>
            Welcome to the Hopewell Wordle Leaderboard
          </h1>
          <div id="home-text">
            Please select one of the options from the menu above to get started. :)
          </div>
        </div>
    )
  }

}
