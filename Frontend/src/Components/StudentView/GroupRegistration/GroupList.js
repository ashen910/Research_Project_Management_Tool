import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaArrowAltCircleLeft } from 'react-icons/fa'
export default class GroupList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    this.retrieveGroups();
  }

  retrieveGroups() {
    axios.get("/groups").then((res) => {
      if (res.data.success) {
        this.setState({
          groups: res.data.existingGroups,
        });

        console.log(this.state.groups);
      }
    });
  }

  filterData(groups, searchKey) {
    const result = groups.filter((group) =>
      group.l_id.toLowerCase().includes(searchKey)
    );

    this.setState({ groups: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/groups").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingGroups, searchKey);
      }
    });
  };

  render() {
    return (
      <div >
        <br /><br /><br />
        <table width="100%" id="tble" >
          <Button variant="warning" href="/StudentDashboard">
            <FaArrowAltCircleLeft /> &nbsp;
            Dashboard
          </Button>
        </table>
        <br />
        <div id="containerJoin">
          <center>
            <h1>All Research groups </h1>
          </center>
        </div>

        <br />
        <br />
        <div style={{ marginTop: 20 }} className="container">
          <div style={{ width: "25%", marginLeft: "80%" }}>

            <input
              className="form-control me-2"
              type="search"
              placeholder="Search By Group leader's ID"
              aria-label="Search"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>



        <br />

        <Table striped>
          <thead>
            <tr>
              <th>Leader's ID</th>

              <th>Member O1</th>
              <th>Member O2</th>
              <th>Member O3</th>
              <th>Member O4</th>
              <th>Group ID</th>
              <th>Panel No.</th>
            </tr>
          </thead>

          <tbody>
            {this.state.groups.map((groups) => (
              <tr>
                <td >{groups.l_id}</td>

                <td >{groups.member01}</td>
                <td >{groups.member02}</td>
                <td >{groups.member03}</td>
                <td >{groups.member04}</td>
                <td >{groups.g_id}</td>
                <td >{groups.panel}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <br></br>
        <br></br>

        <div className="mb-2">
          <Button variant="warning" size="lg">
            <a href="/GroupRegister">
              &nbsp;<b>Register Your group</b>
            </a>
          </Button>

        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}