import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { commentUserAsync } from "../store/action/commentAction";
import { Form, FormGroup, Input, Col, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'



class Comment extends Component {
  state = {
    email: "",
    content: ""

  };



  commetHandler = (e) => {
    e.preventDefault();
    const newComment = {
      email: this.state.email,
      content: this.state.content,

    };

    this.props.commentUserAsync(newComment);
    this.props.history.push({ pathname: '/viewcomments' })
  };

  static propTypes = {
    commentUserAsync: PropTypes.func.isRequired
  };



  render() {
    return (
      <div>
        <Form onSubmit={this.commetHandler}>
          <Col sm={4}>
            <FormGroup>
              <label>Email:</label>
              <Input
                type="text"
                value={this.state.email}
                onChange={(event) =>

                  this.setState({
                    email: event.target.value
                  })}
              />
            </FormGroup>
            <FormGroup>
              <label>Comments:</label><br />
              <textarea rows="8" cols="70"
                type="text"
                value={this.state.content}
                onChange={(event) =>
                  this.setState({ content: event.target.value })
                }
              />

            </FormGroup>

            <Button color="primary" size="lg"> Add Comment</Button>
          </Col>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  content: state.commentReducer.comments
});



export default connect(mapStateToProps, { commentUserAsync })(withRouter(Comment));
