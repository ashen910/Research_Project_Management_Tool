import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaArrowAltCircleLeft } from 'react-icons/fa'

export default class STopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
    };
  }

  componentDidMount() {
    this.retrieveTopics();
  }

  retrieveTopics() {
    axios.get("/topics").then((res) => {
      if (res.data.success) {
        this.setState({
          topics: res.data.existingTopics,
        });

        console.log(this.state.topics);
      }
    });
  }

  filterData(topics, searchKey) {
    const result = topics.filter(
      (topic) =>
        topic.area.toLowerCase().includes(searchKey) |
        topic.name.toLowerCase().includes(searchKey)
    );

    this.setState({ topics: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/topics").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingTopics, searchKey);
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
            <h1>Topic List </h1>
          </center>
        </div>
        <br />
        <br />
        <div style={{ marginTop: 20 }} className="container">
          <div style={{ width: "25%", marginLeft: "80%" }}>

            <input
              className="form-control"
              type="searh"
              placeholder="Search by Research Area"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>
        <br />
        <Table striped>
          <thead>
            <tr>
              <th >#</th>
              <th>Group ID</th>
              <th>Research Area</th>
              <th>Topic</th>
              <th>Description</th>
              <th>Status</th>
              <th>Comments</th>
              <th>Supervisor's Name</th>
              <th>Co-Supervisor's Name</th>
              <th>Final feedback from Panel</th>
            </tr>
          </thead>
          <tbody>
            {this.state.topics.map((topics, index) => (
              <tr key={index}>
                <th >{index + 1}</th>
                <td>{topics.gid}</td>
                <td>{topics.area}</td>
                <td>{topics.name}</td>
                <td>{topics.description}</td>
                <td>{topics.status}</td>
                <td>{topics.comment}</td>
                <td>{topics.sName}</td>
                <td>{topics.csName}</td>
                <td>{topics.feedback}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <br></br>
        <br></br>
        <div className="mb-2">
          <Button variant="warning" size="lg">
            <a href="/RegisterTopic">Register Topic</a>
          </Button>
        </div>

        <br></br>
        <br></br>
      </div>
    );
  }
}