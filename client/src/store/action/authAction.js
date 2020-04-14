import * as actionTypes from "../action/actionTypes";
import { returnError } from "./errorAction";
import axios from "axios";
// import {history} from '../../helper/history';


//check token and load user
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: actionTypes.USER_LOADING });

  axios
    .get("http://localhost:5000/user", tokenConfig(getState))
    .then((response) =>{
      dispatch({
        type: actionTypes.USER_LOADED,
        payload: response.data
      })}).catch((err) => {
        dispatch(returnError(err.response.data, err.response.status));
        dispatch({
          type: actionTypes.AUTH_ERROR
        });
      })
};




export const signupUser = (userData) => {
    return { type: actionTypes.SIGNUP_SUCCESS, payload: userData }
}
export const signupUserAsync = (newUser) => {
    return dispatch => {
        axios.post('http://localhost:5000/signup', newUser)
            .then(response => {
                dispatch(signupUser(response.data));
               })
               .catch(err=>{
                dispatch(returnError(err.response.data, err.response.status));
                   dispatch({ type: actionTypes.SIGNUP_FAIL })
               })
    }
}

// login user

export const signinUser = (userData) => {
  return { type: actionTypes.SIGNIN_SUCCESS, payload: userData }
}

export const signinUserAsync = (item) => {
  return dispatch => {
      axios.post('http://localhost:5000/login', item)
          .then(response => {
              dispatch(signinUser(response.data));
          })

           .catch(err=>{
            dispatch(returnError(err.response.data, err.response.status, 'SIGNIN_FAIL'));
               dispatch({ type: actionTypes.SIGNIN_FAIL })
           })
  }
}

//logout user

export const logout =()=>{
  return {
    type: actionTypes.LOGOUT_SUCCESS
  }
}

export const tokenConfig = (getState) => {
  // get token from local storage
  const token = getState().authReducer.token;

  //header
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  // check token
  if (token) config.headers["x-auth-token"] = token;

  return config;
};



export const commentUser = (userData) => {
  return { type: actionTypes.USER_COMMENT, payload: userData }
}
export const commentUserAsync = (newComment) => {
  return dispatch => {

      axios.post('http://localhost:5000/comments', newComment)
          .then(response => {
              dispatch(commentUser(response.data));
             })
           
  }
}