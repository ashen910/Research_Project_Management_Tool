import React, { Component } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

class DocCategory extends Component {
 
  render() {
    return (

      <div><br /><br /><br />
      <table width="100%" id="tble" >
        <Button variant="warning" href="/AdminDashboard">
          <FaArrowAltCircleLeft /> &nbsp;
          Dashboard
        </Button>
      </table>
            <div className="col-lg-6" >
              <div className="login-right" >
              <h1>Upload Documents TO</h1>
                <br></br><br></br><br></br>
                <ul>
                  
                <li ><span><a href="/StudntDoc">STUDENT</a></span></li>
                <li><span><a href="/SupervisorDoc">SUPERVISOR</a></span></li>
                <li><span><a href="/PannelMemberDoc">PANNEL MEMBER</a></span></li>
                </ul>

              </div>
            </div>


</div>

    );
  }
}

export default (DocCategory);
