import React, { Component } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gid: "",
      area: "",
      name: "",
      description: "",
      status: "",
      comment: "",
      sName: "",
      feedback: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
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
      feedback,
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
      feedback: feedback,
    };

    console.log(data);

    axios.put(`/topic/update/${id}`, data).then((res) => {
      let path = "/FinalTopicDetails";
      if (res.data.success) {
        alert("Successfully published your feedback");
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
          feedback: "",
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
          feedback: res.data.topic.feedback,
        });

        console.log(this.state.topic);
      }
    });
  }

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}><br />
       <div className="com-md-8 mt-4 mx-auto"></div>
       <br /> <br />
                    <center><h1>Assign Co-Supervisors</h1></center>
                    <center>
                    <br />
                    {[
    'Secondary',
  ].map((variant) => (
                        <Card       bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '40rem' }}
                        className="mb-2">

                            <div className="col-md-8 mt-4 mx-auto">
                                <br />
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}><b>Group ID</b></label>
            <input
              disabled
              type="text"
              className="form-control"
              name="gid"
              placeholder=""
              value={this.state.gid}
              onChange={this.handleInputChange}
            />

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}><b>Research Area</b></label>
              <select
                disabled
                name="area"
                value={this.state.area}
                onChange={this.handleInputChange}
                className="form-control"
              >
                <option defaultValue>--Select Your Research Area--</option>
                <option value="Cloud computing">Cloud computing</option>
                <option value="Distributed system">Distributed system</option>
                <option value="Green computing "> Green computing</option>
                <option value="Data Warehousing "> Data Warehousing</option>
                <option value="Artificial Intelligence ">
                  {" "}
                  Artificial Intelligence
                </option>
                <option value="Internet of Things ">Internet of Things </option>
                <option value="Machine learning ">Machine learning </option>
                <option value="Human Computer Interaction  ">
                  {" "}
                  Human Computer Interaction{" "}
                </option>
                <option value="Data mining semantic-web-mining ">
                  Data mining semantic-web-mining{" "}
                </option>
                <option value="Software fault localization ">
                  Software fault localization{" "}
                </option>
              </select>
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}><b>Sub Topic</b></label>
            <input
              disabled
              type="text"
              className="form-control"
              name="name"
              placeholder=""
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}><b>Brief Description</b></label>
            <textarea
              disabled
              type="text"
              className="form-control"
              name="description"
              placeholder=""
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}><b>Status</b></label>
            <input
              disabled
              type="text"
              className="form-control"
              name="status"
              placeholder=""
              value={this.state.status}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}><b>Supervisor's Name</b></label>
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
            <label style={{ marginBottom: "5px" }}><b>Co-Supervisor's Name</b></label>
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
            <label style={{ marginBottom: "5px" }}><b>Final Feedback</b></label>
            <input
              type="text"
              className="form-control"
              name="feedback"
              placeholder=""
              value={this.state.feedback}
              onChange={this.handleInputChange}
            />
          </div>

          <button
           className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            &nbsp; Publish
          </button>
          <br /> <br /> <br />
        </form>
      </div>
      </Card>
  ))}
   <br /> <br /> <br /> <br />
                    </center>
                     </div>

                     
    );
  }
}