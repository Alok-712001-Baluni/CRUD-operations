import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Table} from 'react-bootstrap'
import Courses from './Courses'
import Trainingschedule from './Trainingschedule'
import Trainerdetails from './Trainerdetails'
import Nav from './nav'

export default function Coursetable(){
 return (
     <div>
         

<Nav/>

<Switch>
    {/* <Route exact path="/dashboard/trainingschedule" component={<Trainingschedule/>}/>
    <Route exact path="/dashboard/trainerdetails" component={<Trainerdetails/>}/>
    <Route exact path="/dashboard/courses" component={<Courses/>}/> */}
    
        
</Switch>
         {/* <Trainingschedule/>
         <Trainerdetails/> */}
    </div>
    
 )
}


// <Switch>
//         <Route exact path= "/" component={Home}/>
//         <Route exact path= "/courses" component={Courses}/>
//         <Route exact path= "/trainerdetails" component={Trainerdetails}/>
//         <Route exact path= "/schedule" component={Schedule}/>
//         <Route exact path= "/trainer/:id" component={Viewtrainer}/>
//         <Route exact path= "/createCourse" component={CreateCourse}/>
//         <Route exact path= "/createTrainer" component= {CreateTrainer}/>
//         <Route exact path = "/view/:id" component={Details}/>
//         <Route exact path = "/course/:id" component={Viewcourse} />
//         <Route exact path = "/updateCourse/:id" component={Courseedit}/>
//         <Route exact path= "/updateTrainer/:id" component={Traineredit} />
//         <Route exact path= "/edit/:id" component={Edit}/>
// </Switch>        