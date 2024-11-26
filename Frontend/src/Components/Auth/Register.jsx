import React, { Component } from 'react';
import './Auth.css';
import './register.css';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';
import classnames from 'classnames';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      userCategory: '',
      regNo: '',
      nic: '',
      pNo: '',
      password: '',
      password2: '',
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChangeRegister = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  registerSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      userCategory: this.state.userCategory,
      regNo: this.state.regNo,
      nic: this.state.nic,
      pNo: this.state.pNo,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors, name, password, password2, email, userCategory, regNo, nic, pNo} = this.state;
    return (
      <section className="register" id="banner1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="signup-left">
                
              </div>
            </div>
            <div className="col-lg-6">
              <div className="signup-right"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br />
              <h1>Signup</h1>
                <form noValidate onSubmit={this.registerSubmit}><br />
                <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="name">User Category</label> <br />
                      <select name="userCategory"   defaultValue="Select Type"  id="userCategory" classname="input-control"  value={userCategory}
                        onChange={this.onChangeRegister}
                        error={errors.userCategory}
                        className={classnames('', {
                          invalid: errors.userCategory
                        })}>
                                        <option defaultValue>--Select User Category--</option>
                                        <option value="Student">Student</option>
                                        <option value="Supervisor">Supervisor</option>
                                        <option value="Co-Supervisor">Co-Supervisor</option>
                                        <option value="Pannel Member">Pannel Member</option>
                                    </select>{' '}
                      <br />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="name">Full Name</label> <br />
                      <input
                        type="text"
                        classname="input-control"
                        placeholder="Enter your name"
                        id="name"
                        value={name}
                        onChange={this.onChangeRegister}
                        error={errors.name}
                        className={classnames('', {
                          invalid: errors.name
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.name}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="name">SLIIT Reg No:</label> <br />
                      <input
                        type="text"
                        classname="input-control"
                        placeholder="Enter your SLIIT Registration Number"
                        id="regNo"
                        value={regNo}
                        onChange={this.onChangeRegister}
                        error={errors.regNo}
                        className={classnames('', {
                          invalid: errors.regNo
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.name}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Email">SLIIT Email</label> <br />
                      <input
                        type="email"
                        classname="input-control"
                        placeholder="Enter your email"
                        id="email"
                        value={email}
                        onChange={this.onChangeRegister}
                        error={errors.email}
                        className={classnames('', {
                          invalid: errors.email
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.email}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="name">NIC No:</label> <br />
                      <input
                        type="text"
                        classname="input-control"
                        placeholder="Enter your NIC Number"
                        id="nic"
                        value={nic}
                        onChange={this.onChangeRegister}
                        error={errors.nic}
                        className={classnames('', {
                          invalid: errors.nic
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.nic}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="name">Phone No:</label> <br />
                      <input
                        type="text"
                        classname="input-control"
                        placeholder="Enter Valid Phone Number"
                        id="pNo"
                        value={pNo}
                        onChange={this.onChangeRegister}
                        error={errors.pNo}
                        className={classnames('', {
                          invalid: errors.pNo
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.pNo}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Password">Password</label> <br />
                      <input
                        type="password"
                        classname="input-control"
                        placeholder="Enter your password"
                        id="password"
                        value={password}
                        onChange={this.onChangeRegister}
                        error={errors.password}
                        className={classnames('', {
                          invalid: errors.password
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.password}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Confirm Password">Confirm Password</label>
                      <br />
                      <input
                        type="password"
                        classname="input-control"
                        placeholder="Confirm your password"
                        id="password2"
                        value={password2}
                        onChange={this.onChangeRegister}
                        error={errors.password2}
                        className={classnames('', {
                          invalid: errors.password2
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.password2}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <button type="submit" className="btn btn-md btn-register">
                        Signup
                      </button>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <p>
                        Already have an account ?
                        <Link to="/loginAs" className="text-success">
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
