import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL
} from "./Types";



import axios from 'axios';
export const registerUser = info => dispatch => {
    axios.post('/register', info)
    .then(res=> dispatch({
        type : REGISTER_SUCCESS,
        payload : res.data
    }))


    .catch(err=> dispatch ({
      
       type: REGISTER_FAIL,
       payload : err.response

    }))
    
}

// // export const loadUser = ()=>{
// //   axios.get('/login')
// //   .then((res)=> dispatch({
// //     type : LOAD_USER_SUCCESS,
// //     payload : res.data,
// //   })
// //   )
// //   .catch((err)=> dispatch ({
// //     type : LOAD_USER_FAIL,
// //     payload : err.response.data.msg
// //   })

//   )
// }