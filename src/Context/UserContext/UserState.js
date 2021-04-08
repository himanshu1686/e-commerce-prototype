import {  useReducer } from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import {
    LOGIN_SUCCESS, LOGOUT_SUCCESS 
} from '../types'
const UserState = props => {
    const initialState = {
        name:'',
        isAuth:false,
        email:''
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const login = ()=>{ dispatch( {type: LOGIN_SUCCESS } )};
    const logout = ()=>{ dispatch({type:LOGOUT_SUCCESS}) }
    return (
    <UserContext.Provider value={{
        isAuth : state.isAuth,
        login,
        logout
    }} > 
    {props.children}
    </UserContext.Provider>
    )
}
export default UserState
