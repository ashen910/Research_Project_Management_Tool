import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
//import './Dashboard.css';


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">


              <table width="100%" id="tble" >
              <button 	
                  onClick={this.onLogoutClick}
                  className="btn btn-lg btn-danger mt-5">
                  Logout
                </button>
                </table>




                <h1>
                  Hi! <b>{user.name.split(' ')[0]} </b>
                </h1>
                <h3>
                  Welcome Back Admin
                </h3>
                <br></br>


<table width="100%" >
        <th>
        <div id="btnNew">
        <button id="foot" class="btn1"><button class="button-os"><a href="/userProfiles">User Management</a></button></button>
        </div>
        </th>
        <th>
        <div id="btnNew">
        <button id="foot" class="btn1"><button class="button-os"><a href="/DocCategory">Document Management</a></button></button>
        </div>
        </th>
        <tr>
          <td>
          <div id="btnNew">
        <button id="foot" class="btn1"><button class="button-os"><a href="/RegisteredGroups">Student Group Management</a></button></button>
        </div>
          </td>
          <td>
          <div id="btnNew">
        <button id="foot" class="btn1"><button class="button-os"><a href="/PanelList">Pannel Management</a></button></button>
        </div>
          </td>
        </tr>
        <tr>
          <td>
          <div id="btnNew">
        <button id="foot" class="btn1"><button class="button-os"><a href="/ViewRoles">View Roles</a></button></button>
        </div>
          </td>
          <td>
          <div id="btnNew">
        <button id="foot" class="btn1"><button class="button-os"><a href="/ChatManagement">Chat Management</a></button></button>
        </div>
          </td>
        </tr>
        </table>


            </div>
            </div>
          </div>
        </div>
        

       


      </section>







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
