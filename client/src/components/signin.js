import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Alert, Form, FormGroup, Input, Col } from 'reactstrap'
import { clearError } from '../store/action/errorAction'
import { withRouter } from 'react-router-dom'


import { signinUserAsync } from '../store/action/authAction'

class Signin extends Component {

    state = {
        email: '',
        password: "",
        msg: null
    }

    signinHandler = (e) => {
        e.preventDefault();
        const item = {
            email: this.state.email,
            password: this.state.password,
        };

        this.props.signinUserAsync(item)
         this.props.history.push({ pathname: "/sendmoney" })
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        signinUserAsync: PropTypes.func.isRequired,
        clearError: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            if (error.id === "SIGNIN_FAIL") {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }

        // if(isAuthenticated){
        //  return  <Alert>{"Registered sucessfully"}</Alert>
        // }

    }


    render() {




        return (
            <div>
                {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
                <Form onSubmit={this.signinHandler}>
                    <Col sm={6}>
                        <FormGroup>
                            <label>Email</label><br></br>
                            <Input type="email" value={this.state.email}
                                onChange={(event) => this.setState({ email: event.target.value })} /><br></br>
                        </FormGroup>
                        <FormGroup>
                            <label>Password</label><br></br>
                            <Input type="password" value={this.state.password}
                                onChange={(event) => this.setState({ password: event.target.value })} /><br></br>
                        </FormGroup>
                    </Col>
                    <button type="submit" > Sign in</button>

                </Form>
            </div >
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    error: state.errorReducer
});

export default connect(
    mapStateToProps,
    { signinUserAsync, clearError }
)(withRouter(Signin));
