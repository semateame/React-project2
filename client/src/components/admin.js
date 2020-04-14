import React from 'react';
import { Form, Input, Col, FormGroup } from 'reactstrap';
import * as actionTypes from '../store/action/countryAction'
import { connect } from 'react-redux';


class AdminForm extends React.Component{
 // console.log(props.comments)
 componentDidMount() {
    this.props.onFetchPostsAsyn()
}
render(){
return (
    
             <div>
             <h3> </h3>
             <hr></hr>
             {
                        
              this.props.posts ? this.props.posts.map(country => {
                    return (
                        <div>

                        <div key={country._id}> Id :{country._id}</div>
                        <div key={country._id}> country :{country.country}</div>
                        <div key={country._id}> Price :{country.price}</div>
                        <div key={country._id}> Rate :{country.rate}</div>

                        <span>
                        <button class="btn btn-primary" type="submit">Edit </button>
                        <button class="btn btn-danger" type="submit">Delete </button>
    
                        </span>


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
     posts: state.countryReducer.posts

}
}

const mapDispatchToProps = dispatch => {
return {

    onFetchPostsAsyn: () => dispatch(actionTypes.fetchPostAsync())
}
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminForm);