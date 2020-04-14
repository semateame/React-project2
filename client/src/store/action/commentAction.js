import * as actionTypes from "../action/actionTypes";
import { returnError } from "./errorAction";
import axios from "axios";
// import {history} from '../../helper/history';



export const getComments = (posts) => {
    return { type: actionTypes.GET_COMMENT, payload: posts }
}
export const getCommentsAsync = () => {
    return dispatch => {
        axios.get('http://localhost:5000/viewcomments')
            .then(response => {
                dispatch(getComments(response.data))
            })
    }
}



export const commentUser = (userData) => {
  return { type: actionTypes.USER_COMMENT, payload: userData }
}
export const commentUserAsync = (newComment) => {
  return dispatch => {

      axios.post('http://localhost:5000/addcomments', newComment)
          .then(response => {
              dispatch(commentUser(response.data));
             })
           
  }
}

