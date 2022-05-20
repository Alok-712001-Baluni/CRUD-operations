import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import Coursetable from '../Coursetable/Coursetable'
// import Nav from '../Coursetable/nav'
import Navbar1 from '../Navbar/Navbar1'
import './Dashboard.css';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <Navbar1/>
      <h1>
      Hi! <b>{user.name.split(' ')[0]} </b>            
      </h1>
      <h3>
      <Coursetable/>
      <button
                   onClick={this.onLogoutClick}
                   className="btn btn-lg btn-warning mt-5"
                 >
                   Logout
              </button>            
      </h3>
      </div>           
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);



// <section className="dashboard">
//         <Navbar1/>
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="content">
//                 <h1>
//                   Hi! <b>{user.name.split(' ')[0]} </b>
//                 </h1>
//                 <h3>
//                   <Coursetable/>
                  
//                 </h3>
//                 <button
//                   onClick={this.onLogoutClick}
//                   className="btn btn-lg btn-warning mt-5"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>