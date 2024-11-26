import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";

export default class PanelList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panels: [],
    };
  }

  componentDidMount() {
    this.retrievePanels();
  }

  retrievePanels() {
    axios.get("/panels").then((res) => {
      if (res.data.success) {
        this.setState({
          panels: res.data.existingPanels,
        });

        console.log(this.state.panels);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/panel/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePanels();
    });
  };

  filterData(panels, searchKey) {
    const result = panels.filter(
      (panel) =>
        panel.panelNo.toLowerCase().includes(searchKey) |
        panel.pMember01.toLowerCase().includes(searchKey) |
        panel.pMember02.toLowerCase().includes(searchKey) |
        panel.pMember03.toLowerCase().includes(searchKey)
    );

    this.setState({ panels: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/panels").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPanels, searchKey);
      }
    });
  };

  render() {
    return (
      <div>
        <br /><br /><br />
        <table width="100%" id="tble" >
          <Button variant="warning" href="/AdminDashboard">
            <FaArrowAltCircleLeft /> &nbsp;
            Dashboard
          </Button>
        </table>
        <br />
        <div className="back fixed" style={{ zIndex: 8 }}>
          <br />
          <br />

          <div id="containerJoin">
            <center>
              <h1>All Panels </h1>
            </center>
          </div>


          <div style={{ marginTop: 20 }} className="container">
            <div style={{ width: "30%", marginLeft: "80%" }}>
              <form >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search By Panel No. OR Member's Name"
                  aria-label="Search"
                  onChange={this.handleSearchArea}
                ></input>
              </form>
            </div>


            <br />

            <Table striped>
              <thead>
                <tr>
                  <th>Panel No.</th>

                  <th>Member O1</th>
                  <th>Member O2</th>
                  <th>Member O3</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {this.state.panels.map((panels) => (
                  <tr>
                    <td>{panels.panelNo}</td>

                    <td>{panels.pMember01}</td>
                    <td>{panels.pMember02}</td>
                    <td>{panels.pMember03}</td>
                    <td>
                      <a href={`/EditPanelList/${panels._id}`}>
                        &nbsp;
                        <FaEdit />
                      </a>
                      &nbsp;&nbsp; |&nbsp;
                      <a href="#" onClick={() => this.onDelete(panels._id)}>
                        &nbsp;
                        <FaTrash />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <br></br>
            <br></br>

            <div className="mb-2">
              <Button variant="warning" size="lg">
                <a href="/CreatePanel">
                  Create a New panel&nbsp;
                  <FaPlusCircle />
                </a>
              </Button>
            </div>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
