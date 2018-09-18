import React, { Component } from 'react';
import Game from './pages/Game.jsx';
import MainMenu from './pages/MainMenu.jsx';
import Host from './pages/Host.jsx';
import Join from "./pages/Join.jsx";
import Lobby from './pages/Lobby.jsx';
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/game' component={Game} />
        <Route path='/host' component={Host} />
        <Route path='/lobby' component={Lobby} />
        <Route path='/join' component={Join} />
        <Route path='/' component={MainMenu} />
      </Switch>
    )
  }
}

export default App
