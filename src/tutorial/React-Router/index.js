import React from 'react'
import About from './About'
import Error from './Error';
import Home from './Home';
import NavBar from './NavBar';
import People from './People';
import Person from './Person'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function ReactRouterDom() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    {/* //either write exact or write full name of path bcoz / will  */}
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>

                <Route path="/people">
                    <People />
                </Route>
                <Route path="/person/:id" children={Person}>
                    <Person />
                </Route>
                <Route path="*">
                    {/* // this is going to show in every page , to remove this wrap all route in switch */}
                    <Error />
                </Route>

            </Switch>
        </Router>
    )
}

export default ReactRouterDom