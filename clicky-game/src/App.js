import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/Navs/NavBar'
import Home from './components/Home/Home'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    )
  }
}

export default App
