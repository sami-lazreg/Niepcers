import{combineReducers} from 'redux';
import AuthReducer from './authReducer';
import myPhotosReducer from './myPhotosReducer'




export default combineReducers({auth:AuthReducer , myPhotosReducer });
