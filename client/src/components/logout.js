import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'
import { logout } from '../store/action/authAction'
import { Alert } from "reactstrap";
//import { withRouter } from "react-router";


class Logout extends Component {
  logoutHandler = (e) => {
    e.preventDefault()

    this.props.logout();
    this.props.history.push({ pathname: "/" })

  };

  static propTypes = {
    logout: PropTypes.func.isRequired
  };


  render() {




    return (
      <div>
        <Alert>Are sure you want log out ?</Alert>
        <button onClick={this.logoutHandler}> Yes</button>
      </div>
    );
  }
}



export default connect(
  null,
  { logout }
)(withRouter(Logout));
