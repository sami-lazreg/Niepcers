import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL
  } from "../Actions/Types";



let initState = {
token:localStorage.getItem('token'),
user: null,
isAuth: false,
errors : null

}





const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user : action.payload,
                errors: null
            }
       case REGISTER_SUCCESS:
           localStorage.setItem('token', action.payload.token)
       return {
           ...state,
           token:action.payload.token,
           isAuth : true,
           errors: null,
       }
       case REGISTER_FAIL:
        localStorage.removeItem('token')
    return {
        ...state,
        isAuth : false,
        errors: action.payload,
    }
        default:
           return state
    }
}


export default authReducer;