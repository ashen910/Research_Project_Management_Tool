import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export default class EditUser extends Component {


    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            name: "",
            email: "",
            password: "",
            userCategory: "",
            regNo: "",
            nic: "",
            pNo: "",
            date: ""

        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {

        e.preventDefault();

        const id = this.props.match.params.id;
        const { _id, name, email, password, userCategory, regNo, nic, pNo, date } = this.state;

        const data = {

            _id: _id,
            name: name,
            email: email,
            password: password,
            userCategory: userCategory,
            regNo: regNo,
            nic: nic,
            pNo: pNo,
            date: date,

        }

        console.log(data)

        axios.put(`/User/update/${id}`, data).then((res) => {
            let path = "/userProfiles";
            if (res.data.success) {
                alert("User Profile Updated Successfully");
                this.props.history.push(path);
                this.setState(
                    {
                        _id: "",
                        name: "",
                        email: "",
                        password: "",
                        userCategory: "",
                        regNo: "",
                        nic: "",
                        pNo: "",
                        date: ""
                    }
                )
            }
        })


    }


    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/User/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    _id: res.data.post._id,
                    name: res.data.post.name,
                    email: res.data.post.email,
                    userCategory: res.data.post.userCategory,
                    regNo: res.data.post.regNo,
                    nic: res.data.post.nic,
                    pNo: res.data.post.pNo,
                    date: res.data.post.date,
                    password: res.data.post.password

                });

                console.log(this.state.post);

            }

        });

    }

    render() {
        return (
   
            <div className="back fixed" style={{ zIndex: 8 }}><br />
                <div className="com-md-8 mt-4 mx-auto">
                    <br /> <br />
                    <center><h1>Edit User Profile</h1></center>
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



                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}><b>SLIIT ID</b></label>
                                        <input type="text"
                                            className="form-control"
                                            name="regNo"
                                            placeholder="Enter Registration Number"
                                            disabled
                                            value={this.state.regNo}
                                            onChange={this.handleInputChange} />
                                    </div><br />

                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}><b>SLIIT Email</b></label>
                                        <input type="text"
                                            className="form-control"
                                            name="email"
                                            placeholder="Enter valid Email"
                                            disabled
                                            value={this.state.email}
                                            onChange={this.handleInputChange} />
                                    </div><br />


                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}><b>User Category</b></label>
                                        <select name="userCategory" value={this.state.userCategory} onChange={this.handleInputChange} defaultValue="Select Type" className="form-control" >
                                            <option value="Student">Student</option>
                                            <option value="Supervisor">Supervisor</option>
                                            <option value="Co-Supervisor">Co-Supervisor</option>
                                            <option value="Pannel Member">Pannel Member</option>
                                        </select>
                                    </div><br />

                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}><b>Full Name</b></label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="name"
                                                    value={this.state.name}
                                                    onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}><b>NIC</b></label>
                                        <input type="text"
                                            className="form-control"
                                            name="nic"
                                            placeholder="Enter NIC Number"
                                            value={this.state.nic}
                                            onChange={this.handleInputChange} />
                                    </div><br />


                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}><b>Contact Number</b></label>
                                        <input type="text"
                                            className="form-control"
                                            name="pNo"
                                            placeholder="Enter Valid Contact Number (EX:94xxxxxxxxx)"
                                            value={this.state.pNo}
                                            onChange={this.handleInputChange} />
                                    </div><br />


                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <label style={{ marginBottom: '5px' }}><b>Updating Date</b></label>
                                        <input type="text"
                                            className="form-control"
                                            name="date"
                                            value={this.state.date}
                                            onChange={this.handleInputChange} />
                                    </div><br />



                                    <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                        <i className="far far-check-square"></i>
                                        &nbsp; Save Changes
                                    </button>
                                    <br /> <br /> <br />

                                </form>

                            </div>
                      </Card>
                        ))}

                        <br /> <br /> <br /> <br />
                    </center>
                </div>

            </div>



        )
    }
}