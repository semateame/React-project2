import axios from 'axios'
import * as actionType from './actionTypes'


export const getCountry = (posts) => {
    return { type: actionType.GET_COUNTRY, payload: posts }
}
export const fetchPostAsync = () => {
    return dispatch => {
        axios.get('http://localhost:5000/product')
            .then(response => {
                dispatch(getCountry(response.data))
            })
    }
}



export const addcountry = (posts) => {
    return { type: actionType.ADD_COUNTRY, payload: posts }
}

export const postCountryAsync = (item) => {
    console.log("dddddddddddddddddd", item)
    return dispatch => {
        axios.post('http://localhost:5000/products',item)
            .then(response => {
                dispatch(addcountry(response.data))
            })
    }
}

