import React from 'react';
// import { Form, Input, Col, FormGroup } from 'reactstrap';
import * as actionTypes from '../store/action/commentAction';
import { connect } from 'react-redux';




class ViewComments extends React.Component  {
    // console.log(props.comments)
    componentDidMount() {
        this.props.onGetCommentsAsync()
 }
    render(){
    return (
        
                 <div>
                 <h3>User Comments </h3>
                 <hr></hr>
                 {
                            
                  this.props.comments ? this.props.comments.map(comment => {
                        return (
                            <div>
                            
                            <div key={comment._id}> Date :{comment.comment_date}</div>
                            <div key={comment._id}> Email :{comment.email}</div>
                            <div key={comment._id}> Feedback :{comment.content}</div>
                            <hr></hr>

                            </div>
                           
                        )
                    }) : null

                }
                 </div>
                        

    );
}
}

const mapStateToProps = state => {
    return {
         comments: state.commentReducer.comments

    }
}

const mapDispatchToProps = dispatch => {
    return {

        onGetCommentsAsync: () => dispatch(actionTypes.getCommentsAsync())


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewComments);
