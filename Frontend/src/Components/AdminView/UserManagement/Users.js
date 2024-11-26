import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { FaArrowAltCircleLeft, FaEdit, FaTrash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      User: []
    };

  }


  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/users").then(res => {
      if (res.data.success) {
        this.setState({
          User: res.data.existingPosts
        });

        console.log(this.state.User);
      }


    });
  }


  onDelete = (id) => {

    axios.delete(`/User/delete/${id}`).then((res) => {
      alert("User Profile Deleted Successfully");
      this.retrievePosts();
    })
  }


  filterData(User, searchKey) {

    const result = User.filter((post) =>
      post.userCategory.toLowerCase().includes(searchKey)

    )

    this.setState({ User: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/users").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });

  }

  render() {
    return (
      <div>
        <div><br /><br /><br />
          <table width="100%" id="tble" >
            <Button variant="warning" href="/AdminDashboard">
              <FaArrowAltCircleLeft /> &nbsp;
              Dashboard
            </Button>
          </table>
          <br /> <br /> <br />
          <div style={{ width: '20%', marginLeft: '80%' }}>
            <form className="d-flex">
              <input className="form-control me-2"
                type="search"
                placeholder="Search By User Category"
                aria-label="Search" onChange={this.handleSearchArea}>
              </input>
            </form>
          </div>


          <div id="containerJoin">
            <center>
              <h1 className="gifJoin">All User Profiles</h1>
            </center>
          </div><br />


          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>User ID</th>
                <th>Full Name</th>
                <th>SLIIT Email</th>
                <th>NIC</th>
                <th>Contact Number</th>
                <th>Date</th>
                <th>User Category</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {this.state.User.map((User, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td>{User.regNo}</td>
                  <td>{User.name}</td>
                  <td>{User.email}</td>
                  <td>{User.nic}</td>
                  <td>{User.pNo}</td>
                  <td>{User.date}</td>
                  <td>{User.userCategory}</td>

                  <td class="table-light">
                    <a className="btn btn-primary" href={`/EditUser/${User._id}`}>
                      <FaEdit />&nbsp;
                    </a>
                    &nbsp;

                    <a className="btn btn-danger" href="#" onClick={() => window.confirm("Are You Sure You Want To Delete This User Profile ?") && this.onDelete(User._id)}>
                      <FaTrash />&nbsp;
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <br /><br />
          <br /><br />
        </div>
      </div>

    )
  };
};