import React from "react";
import { NavLink } from "react-router-dom";
import Schedule from "./Schedule";
import "./Home.css";
const Home = () => {
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
            <tr>
              <th scope="row">1</th>
              <td>Java</td>
              <td>Subhash</td>
              <td>23-05-2022</td>
              <td>11:00</td>
              <td>14:00</td>
              <td>400</td>
              <td>40</td>
              <td>15</td>
              <td className="d-flex justify-content-between">
                  <button className="btn btn-success"><i className="fa-regular fa-eye"></i></button>
                  <button className="btn btn-primary"><i className="fas fa-pen"></i></button>
                  <button className="btn btn-danger"><i className="fas fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Python</td>
              <td>Rohan</td>
              <td>25-05-2022</td>
              <td>14:00</td>
              <td>16:00</td>
              <td>500</td>
              <td>50</td>
              <td>30</td>
              <td className="d-flex justify-content-between">
                  <button className="btn btn-success"><i class="fa-regular fa-eye"></i></button>
                  <button className="btn btn-primary"><i className="fas fa-pen"></i></button>
                  <button className="btn btn-danger"><i className="fas fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Data science</td>
              <td>Vivek</td>
              <td>19-05-2022</td>
              <td>10:00</td>
              <td>13:00</td>
              <td>300</td>
              <td>30</td>
              <td>20</td>
              <td className="d-flex justify-content-between">
                  <button className="btn btn-success"><i class="fa-regular fa-eye"></i></button>
                  <button className="btn btn-primary"><i className="fas fa-pen"></i></button>
                  <button className="btn btn-danger"><i className="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
