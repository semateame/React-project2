import * as actionTypes from '../action/actionTypes'

//retrun error

export const returnError =(msg ,status, id =null)=>{
    return {
        type: actionTypes.GET_ERROR,
        payload : {msg,id,status}
    }
}

//clear error

export const clearError =()=>{
    return {
        type: actionTypes.CLEAR_ERROR
       
    }
}