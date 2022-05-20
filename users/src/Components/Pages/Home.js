<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Schedule from "./Schedule";
import "./Home.css";
const Home = () => {




const [getScheduleData, setScheduleData] = useState([])
console.log(getScheduleData)

const getSchedule = async (e) => {
 

  const res = await fetch("/getSchedule", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json'
    }
  })

  const data= await res.json()
  console.log(data)
  console.log(res.status)

  if(res.status === 422 || !data){
      console.log('error')
  }else{
	  	setScheduleData(data)
		console.log("get schedule")
  }
}

useEffect(() => {
	getSchedule()	
}, []);

const deleteSchedule = async(id)=>{
	const res2 = await fetch(`/deleteSchedule/${id}`,{
		method: "DELETE",
		headers: {
			"Content-Type" : "application/json"
		}
	})

	const deletedata = await res2.json()
	console.log(deletedata)

	if(res2.status === 422 || !deletedata){
		console.log("error")
	} else{
		console.log("user deleted")
		getSchedule()
	} 
}

  return (
    <div className="mt-4">
=======
import React from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:2000/api/getAll`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  

  render() {
    return (



      <div className="mt-4">
>>>>>>> 6fb735daa0973b42ee7e7e5071aed74a5b25e880
      <div className="container">
        <div className="schedule_btn mt-2">
          <NavLink className="btn btn-primary" to="/schedule"> Create Schedule</NavLink>
        </div>

        <table class="table mt-4">
          <thead>
            <tr className="table-dark">
            <th scope="col">id</th>
              <th scope="col">Course</th>
              <th scope="col">Trainer name</th>
              <th scope="col">Date(s)</th>
              <th scope="col">Starting time</th>
              <th scope="col">Ending time</th>
              <th scope="col">Fee amount</th>
              <th scope="col">Discount amount</th>
              <th scope="col">Batch size</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
<<<<<<< HEAD
			  {
				  getScheduleData.map((element, id)=>{
					  return (
						  <>
					<tr>
						<th scope="row">{id+1}</th>
						<td>{element.course}</td>
						<td>{element.trainer_name}</td>
						<td>{element.date}</td>
						<td>{element.starting_time}</td>
						<td>{element.ending_time}</td>
						<td>{element.fee_amount}</td>
						<td>{element.disc_amount}</td>
						<td>{element.batch_size}</td>
				<td className="d-flex justify-content-between">
                  <NavLink to={`view/${element._id}`}><button className="btn btn-success "><i className="fa-regular fa-eye"></i></button></NavLink>
                  <NavLink to={`edit/${element._id}`}><button className="btn btn-primary "><i className="fas fa-pen"></i></button></NavLink>
                  <button className="btn btn-danger" onClick={() => deleteSchedule(element._id)}><i className="fas fa-trash"></i></button>
              </td>					
					</tr>
					</>
					  )
				  })
			  }

=======
         
      
            
            {
          this.state.persons
            .map(person =>
              <tr key={person.id}>
              <th scope="row">{person._id}</th>
              <td>{person.course}</td>
              <td>{person.trainer_name}</td>
              <td>{person.date}</td>
              <td>{person.starting_time}</td>
              <td>{person.ending_time}</td>
              <td>{person.fee_amount}</td>
              <td>{person.disc_amount}</td>
              <td>{person.fee_amount}</td>
              <td className="d-flex justify-content-between">
                  
                  <button className="btn btn-primary"><i className="fas fa-pen"></i></button>
                  <button className="btn btn-danger"><i className="fas fa-trash"></i></button>
              </td>
              </tr>
            )
        }
           
            
            
>>>>>>> 6fb735daa0973b42ee7e7e5071aed74a5b25e880
          </tbody>
        </table>
      </div>
    </div>
      
      
       

    )
  }
}
