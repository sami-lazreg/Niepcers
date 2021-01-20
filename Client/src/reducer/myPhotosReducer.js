import {GET_NIEPCERS_SUCCESS,GET_NIEPCERS_FAIL} from '../Actions/Types'

let initState=[]
const myPhotosReducer = (state=initState,action) => {
    switch (action.type){
        case GET_NIEPCERS_SUCCESS:
            return  action.payload;

            case GET_NIEPCERS_FAIL:
                 return action.payload;

           default :
           return state;
    }
}

export default myPhotosReducer
