
import * as actionTypes from '../action/actionTypes'


const initialState = {
    comments: []
}

const reducer = (state = initialState, action) => {


    if (action.type === actionTypes.USER_COMMENT) {
        return {
            ...state,
            comments: [action.payload, ...state.comments]
        }
    }


    if (action.type === actionTypes.GET_COMMENT) {
        return {
            ...state,
            comments: action.payload
        }
    }
    
    return state;
}

export default reducer;




