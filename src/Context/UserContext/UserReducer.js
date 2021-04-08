
import {
    LOGIN_SUCCESS ,
    LOGOUT_SUCCESS
} from '../types'

const ReducerFunction = (state,action) => {   
    switch(action.type){
    case LOGIN_SUCCESS:
        return {
            ...state,
            isAuth:true
        }
    case LOGOUT_SUCCESS:
        return {
            ...state,
            isAuth:false
        }  
    default:
        return state     
}
}
export default ReducerFunction