import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { signupUserAsync } from "../store/action/authAction";
import {Alert} from 'reactstrap'
import {clearError} from '../store/action/errorAction'
class Signup extends Component {
  state = {
    email: "",
    password: "",
    role: "",
    msg: null
  };

//   this.props.clearError();

  signupHandler = (e) => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    };

    this.props.signupUserAsync(newUser);
    this.props.history.push({pathname:'/signin'})
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    signupUserAsync:PropTypes.func.isRequired,
    clearError: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps){
      const {error, isAuthenticated} = this.props;
      if(error !== prevProps.error){
          if(error.id ==="SIGNUP_FAIL"){
              this.setState({msg: error.msg.msg})
          } else{
              this.setState({msg:null})
          }
      }

      // if(isAuthenticated){
      //  return  <Alert>{"Registered sucessfully"}</Alert>
     // }

  }

  render() {
    return (
      <div>
      {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert>:null}
        <div className="container">
          <label>Email</label>
          <br></br>
          <input
            type="text"
            value={this.state.email}
            onChange={(event) => 

                this.setState({ 
                email: event.target.value })}
          />
          <br></br>

          <label>Password</label>
          <br></br>
          <input
            type="text"
            value={this.state.password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <br></br>
          <label>Role</label>
          <br></br>
          <input
            type="text"
            value={this.state.role}
            onChange={(event) => this.setState({ role: event.target.value })}
          />
          <br></br>

          <button onClick={this.signupHandler}> Signup</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  error: state.errorReducer
});
export default connect(mapStateToProps, { signupUserAsync, clearError })(withRouter(Signup));
