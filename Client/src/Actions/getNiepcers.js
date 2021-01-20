import axios from 'axios'
import {GET_NIEPCERS_FAIL,GET_NIEPCERS_SUCCESS} from './Types'

import setToken from '../helpers/setToken'

export const getNiepcers = ()=>dispatch=>{
    setToken()
 axios.get('/photos/myPhotos')
   .then(res=>dispatch({
       type:GET_NIEPCERS_SUCCESS,
       payload:res.data
   }))
   .catch(err=>dispatch({
       type:GET_NIEPCERS_FAIL,
       payload: err.response
   }))
}

