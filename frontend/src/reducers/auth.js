const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

// The reducer is a function that takes in the state and an action.
export default function(state = initialState, action) {
  switch(action.type) {
    // case USER_LOADING:
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // case USER_LOADED:
    //   return {
    //     ...state,
    //     isAuthenticated: true,
    //     isLoading: false,
    //     // The payload is the user object.
    //     user: action.payload
    //   }
    // case LOGIN_SUCCESS:
    // case REGISTER_SUCCESS:
    //   // The payload is the token.
    //   localStorage.setItem('token', action.payload.token)
    //   return {
    //     ...state,
    //     ...action.payload,
    //     isAuthenticated: true,
    //     isLoading: false
    //   }
    // case AUTH_ERROR:
    // case LOGIN_FAIL:
    // case LOGOUT_SUCCESS:
    // case REGISTER_FAIL:
    //   // Remove the token from local storage.
    //   localStorage.removeItem('token')
    //   return {
    //     ...state,
    //     token: null,
    //     user: null,
    //     isAuthenticated: false,
    //     isLoading: false
    //   }
    default:
      return state
  }
}