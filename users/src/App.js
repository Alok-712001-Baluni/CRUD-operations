import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Notfound from './Components/Pages/Notfound';

import Home from './Components/Pages/Home'
import Courses from './Components/Pages/Courses'
import Trainerdetails from './Components/Pages/Trainerdetails'
import Navbar from './Components/Layout/Navbar'
import Schedule from './Components/Pages/Schedule';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Details from './Components/Pages/Details';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path= "/" component={Home}/>
        <Route exact path= "/courses" component={Courses}/>
        <Route exact path= "/trainerdetails" component={Trainerdetails}/>
        <Route exact path= "/schedule" component={Schedule}/>
        <Route exact path = "/view/:id" component={Details}/>
        <Route component={Notfound}/>
      </Switch>

    
    </Router>
  );
}

export default App;
