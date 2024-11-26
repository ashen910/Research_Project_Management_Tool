import React, { Component } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
export default class RegisterTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gid: "",
      area: "",
      name: "",
      description: "",
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

    const { gid, area, name, description } = this.state;

    const data = {
      gid: gid,
      area: area,
      name: name,
      description: description,
    };

    console.log(data);

    axios.post("/topic/save", data).then((res) => {
      let path = "/STopics";
      if (res.data.success) {
        alert("Topic Registered Successfully");
        this.props.history.push(path);
        this.setState({
          gid: "",
          area: "",
          name: "",
          description: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}><br />
      <div className="com-md-8 mt-4 mx-auto"></div>
      <br /> <br />
                   <center><h1>Your New Research Topic</h1></center>
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
              type="text"
              className="form-control"
              name="gid"
              placeholder=""
              value={this.state.gid}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}><b>Research Area</b></label>
            <select
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

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}><b>Sub Topic</b></label>
            <input
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
              type="text"
              className="form-control"
              name="description"
              placeholder=""
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>

          <button
          className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            &nbsp; Post to forum
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