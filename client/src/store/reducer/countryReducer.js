
import * as actionTypes from '../action/actionTypes'


const initialState = {
    posts: []
}

const reducer = (state = initialState, action) => {


    if (action.type === actionTypes.GET_COUNTRY) {
        return {
            ...state,
            posts: action.payload,
        }
    }


    if (action.type === actionTypes.ADD_COUNTRY) {

        return {
            ...state,
            posts: [action.payload, ...state.posts]
        }
    }
    return state;
}

export default reducer;




