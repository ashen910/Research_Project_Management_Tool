import React, { Component } from "react";
import axios from "axios";
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';


export default class ChatManagement extends Component {
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
        topic.gid.toLowerCase().includes(searchKey) 
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
      <div className="container">
         <br /><br /><br />
          <table width="100%" id="tble" >
            <Button variant="warning" href="/AdminDashboard">
              <FaArrowAltCircleLeft /> &nbsp;
              Dashboard
            </Button>
          </table>
          <br />
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>Topic List</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="searh"
              placeholder="Search by Group id"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Group ID</th>

              <th>Supervisor's Name</th>
              <th>Co-Supervisor's Name</th>

              <th>Chat ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.topics.map((topics, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/topicRoutes/${topics._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {topics.gid}
                  </a>
                </td>

                <td>{topics.sName}</td>
                <td>{topics.csName}</td>

                <td>{topics.cId}</td>
                <td>
                  <a
                    className="btn btn-dark"
                    href={`/AssignChatiD/${topics._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;<b>Assign Chat ID</b>
                  </a>
                  &nbsp;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}