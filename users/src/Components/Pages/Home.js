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
           
            
            
          </tbody>
        </table>
      </div>
    </div>
      
      
       

    )
  }
}
