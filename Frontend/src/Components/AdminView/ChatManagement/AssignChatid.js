import React, { Component } from "react";
import axios from "axios";

export default class AssignChatID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gid: "",
      name: "",
      status: "",
      sName: "",
      csName: "",
      cId: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  generateKey = (e) => {
    e.preventDefault();

    this.setState({
      cId: "chat_" + this.state.gid + "_",
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;

    const {
      gid,
      area,
      name,
      description,
      status,
      comment,
      sName,
      csName,
      cId,
    } = this.state;

    const data = {
      gid: gid,
      area: area,
      name: name,
      description: description,
      status: status,
      comment: comment,
      sName: sName,
      csName: csName,
      cId: cId,
    };

    console.log(data);

    axios.put(`/topic/update/${id}`, data).then((res) => {
      let path = "/ChatManagement";
      if (res.data.success) {
        alert("Successfully Assigned");
        this.props.history.push(path);
        this.setState({
          gid: "",
          area: "",
          name: "",
          description: "",
          status: "",
          comment: "",
          sName: "",
          csName: "",
          cId: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/topic/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          gid: res.data.topic.gid,
          area: res.data.topic.area,
          name: res.data.topic.name,
          description: res.data.topic.description,
          status: res.data.topic.status,
          comment: res.data.topic.comment,
          sName: res.data.topic.sName,
          csName: res.data.topic.csName,
          cId: res.data.topic.cId,
        });

        console.log(this.state.topic);
      }
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1>Assign Chat IDs</h1>

        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Group ID</label>
            <input
              disabled
              type="text"
              className="form-control"
              name="gid"
              placeholder=""
              value={this.state.gid}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Supervisor's Name</label>
            <input
              disabled
              type="text"
              className="form-control"
              name="sName"
              placeholder=""
              value={this.state.sName}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Co-Supervisor's Name</label>
            <input
              disabled
              type="text"
              className="form-control"
              name="csName"
              placeholder=""
              value={this.state.csName}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Assign A Chat ID</b>
            </label>
            <br />
            <button
              className="btn btn-dark"
              type="submit"
              style={{ marginTop: "15px" }}
              onClick={this.generateKey}
            >
              <i className="far far-check-square"></i>
              &nbsp; Generate Chat ID
            </button>
            <br />
            <br />
            <input
              type="text"
              className="form-control"
              name="cId"
              placeholder="EX:2022_Feb_IT20135966"
              value={this.state.cId}
              onChange={this.handleInputChange}
            />
          </div>
          <br />
          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="far far-check-square"></i>
            &nbsp; Assign Chat Id
          </button>
        </form>
      </div>
    );
  }
}