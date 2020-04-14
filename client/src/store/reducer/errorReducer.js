import * as actionTypes from '../action/actionTypes';

const initialState ={
    msg :{},
    status :null,
    id :null
}

const reducer = (state = initialState, action) => {


    if (action.type === actionTypes.GET_ERROR) {
        return {
            msg : action.payload.msg,
            id : action.payload.id,
            status : action.payload.status
        }
    }

    if (action.type === actionTypes.CLEAR_ERROR) {
        return {
            msg : {},
            id : null,
            status : null
        }
    }
   
    return state;
}

export default reducer;

