import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Notfound from './Components/Pages/Notfound';
import Viewcourse from './Components/Pages/Viewcourse';
import Home from './Components/Pages/Home'
import Courses from './Components/Pages/Courses'
import Trainerdetails from './Components/Pages/Trainerdetails'
import Navbar from './Components/Layout/Navbar'
import Schedule from './Components/Pages/Schedule'
import Viewtrainer from './Components/Pages/Viewtrainer'
import CreateCourse from './Components/Pages/CreateCourse'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Details from './Components/Pages/Details';
import Edit from './Components/Pages/Edit'
import CreateTrainer from './Components/Pages/Createtrainer';
import Courseedit from './Components/Pages/Courseedit';
import Traineredit from './Components/Pages/Traineredit';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path= "/" component={Home}/>
        <Route exact path= "/courses" component={Courses}/>
        <Route exact path= "/trainerdetails" component={Trainerdetails}/>
        <Route exact path= "/schedule" component={Schedule}/>
        <Route exact path= "/trainer/:id" component={Viewtrainer}/>
        <Route exact path= "/createCourse" component={CreateCourse}/>
        <Route exact path= "/createTrainer" component= {CreateTrainer}/>
        <Route exact path = "/view/:id" component={Details}/>
        <Route exact path = "/course/:id" component={Viewcourse} />
        <Route exact path = "/updateCourse/:id" component={Courseedit}/>
        <Route exact path= "/updateTrainer/:id" component={Traineredit} />
        <Route exact path= "/edit/:id" component={Edit}/>
        <Route component={Notfound}/>
      </Switch>

    
    </Router>
  );
}

export default App;
