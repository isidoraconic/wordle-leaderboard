import React from 'react';
import './style/App.css';
import Leaderboard from './components/Leaderboard'
import Home from './components/Home'
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Hopewell Wordle Leaderboard"
  }

  render() {
    return (
        <BrowserRouter>
          <div>
            <NavBar/>
            <Routes>
              <Route path="/leaderboard" element={<Leaderboard />}/>
              <Route path="/" element={<Home />}/>
            </Routes>
          </div>
        </BrowserRouter>
    )
  }
}