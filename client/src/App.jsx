import React, { Component } from 'react';
import TabooCard from './TabooCard.jsx';
import MainMenu from './pages/MainMenu.jsx';
import Host from './pages/Host.jsx';
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/game' component={TabooCard} />
        <Route path='/host' component={Host} />
        <Route path='/' component={MainMenu} />
      </Switch>
    )
  }
}

export default App
