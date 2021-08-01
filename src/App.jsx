import React from 'react'
import Topbar from './TopBar/TopBar'
import Home from './TopBar/Home'
import About from './TopBar/About'
import Contact from './TopBar/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Topbar/>
      <Switch>

        <Route path="/home">
            <Home />
        </Route>

        <Route path="/about">
            <About />
        </Route>

        <Route path="/contact">
            <Contact />
        </Route>

      </Switch>
    </Router>
  )
}
