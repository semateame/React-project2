import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sendmoney from '../components/sendmoney';



import * as actionType from '../store/action/countryAction'



class Country extends Component {

    componentDidMount() {
        this.props.onFetchPostsAsyn()


    }
   

    render() {
        return (
            <div>
                <Sendmoney posts={this.props.posts} />

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
         posts: state.countryReducer.posts,

    }
}

const mapDispatchToProps = dispatch => {
    return {

        onFetchPostsAsyn: () => dispatch(actionType.fetchPostAsync()),


    }
}

//connect takes function which returns another function that takes a function (counter)
export default connect(mapStateToProps, mapDispatchToProps)(Country)
