import React, { Component } from "react";
import { connect } from "react-redux";
import { postCountryAsync } from '../store/action/countryAction'


class AddForm extends Component {

    state = {
        country: '',
        price: null,
        rate: null,
    }

    addPostHandler = (e) => {
        e.preventDefault();
        const item = {
            country: this.state.country,
            price: this.state.price,
            rate: this.state.rate
        };
        this.props.postCountryAsync(item)
    }


    render() {




        return (

            
            <div>

           

                <div className="container">
                    <label>Country</label><br></br>
                    <input type="text" value={this.state.country}
                        onChange={(event) => this.setState({ country: event.target.value })} /><br></br>

                    <label>Price</label><br></br>
                    <input type="text" value={this.state.price}
                        onChange={(event) => this.setState({ price: event.target.value })} /><br></br>
                    <label>Rate</label><br></br>
                    <input type="text" value={this.state.rate}
                        onChange={(event) => this.setState({ rate: event.target.value })} /><br></br>

                    <button onClick={this.addPostHandler}>Add Post</button>

                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    posts: state.countryReducer.posts
});

export default connect(
    mapStateToProps,
    { postCountryAsync }
)(AddForm);
