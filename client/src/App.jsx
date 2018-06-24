import React, { Component } from 'react';
import TabooCard from './TabooCard.jsx';
import MainMenu from './pages/MainMenu.jsx';
import { Switch, Route, Link } from 'react-router-dom'

// Hello
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/game' component={TabooCard} />
        <Route path='/' component={MainMenu} />
      </Switch>
    )
  }
}

export default App
