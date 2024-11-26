import React, { Component } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
export default class EditPanelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelNo: "",
      pMember01: "",
      pMember02: "",
      pMember03: "",
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

    const { panelNo, pMember01, pMember02, pMember03 } = this.state;

    const data = {
      panelNo: panelNo,
      pMember01: pMember01,
      pMember02: pMember02,
      pMember03: pMember03,
    };

    console.log(data);

    axios.put(`/panel/update/${id}`, data).then((res) => {
      let path = "/PanelList";
      if (res.data.success) {
        alert("Panel Updated Successfully");
        this.props.history.push(path);
        this.setState({
          panelNo: "",
          pMember01: "",
          pMember02: "",
          pMember03: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/panel/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          panelNo: res.data.panel.panelNo,
          pMember01: res.data.panel.pMember01,
          pMember02: res.data.panel.pMember02,
          pMember03: res.data.panel.pMember03,
        });

        console.log(this.state.panel);
      }
    });
  }

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}><br />
      <div className="com-md-8 mt-4 mx-auto"></div>
      <br /> <br />
                   <center><h1>Edit Panel Members</h1></center>
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
            <label style={{ marginBottom: "5px" }}><b>Panel Number</b></label>
            <select
              name="panelNo"
              value={this.state.panelNo}
              onChange={this.handleInputChange}
              className="form-control"
            >
              <option defaultValue>--Select the Panel Number--</option>
              <option value="Panel 01">Panel 01</option>
              <option value="Panel 02">Panel 02</option>
              <option value="Panel 03 "> Panel 03</option>
              <option value="Panel 04 "> Panel 04</option>
              <option value="Panel 05 "> Panel 05{""}</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Panel Member 01</b>
            </label>
            <textarea
              class="form-control"
              id="textAreaExample"
              rows="3"
              name="pMember01"
              placeholder="Name"
              value={this.state.pMember01}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Panel Member 02</b>
            </label>
            <textarea
              class="form-control"
              id="textAreaExample"
              rows="3"
              name="pMember02"
              placeholder="Name   "
              value={this.state.pMember02}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Panel Member 03</b>
            </label>
            <textarea
              class="form-control"
              id="textAreaExample"
              rows="3"
              name="pMember03"
              placeholder="Name   "
              value={this.state.pMember03}
              onChange={this.handleInputChange}
            />
          </div>
          <button
          className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            &nbsp; Update
          </button> <br /> <br /> <br />
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
