import * as actionTypes from "../action/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.USER_LOADING) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === actionTypes.USER_LOADED) {
    return {
      ...state,
      isAuthenticated: true,
      isLoading: false,
      user: action.payload,
    };
  }

  if (
    action.type === actionTypes.SIGNUP_SUCCESS ||
    action.type === actionTypes.SIGNIN_SUCCESS
  ) {
    localStorage.setItem("token", action.payload.token);

    return {
      ...state,
      ...action.payload,
      isAuthenticated: true,
      isLoading: false,
    };
  }

  if (
    action.type === actionTypes.SIGNUP_FAIL ||
    action.type === actionTypes.SIGNIN_FAIL ||
    action.type === actionTypes.AUTH_ERROR ||
    action.type === actionTypes.LOGOUT_SUCCESS
  ) {
    localStorage.removeItem("token");
    return {
      ...state,
      user: null,
      isAuthenticated: false,
      token: null,
      isLoading: false,
    };
  }

  return state;
};

export default reducer;
