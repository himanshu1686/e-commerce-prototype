import {useReducer} from 'react'
import CartReducer from './CartReducer'
import CartContext from './CartContext'

import { ADD_TO_CART, REMOVE_FROM_CART } from '../types'


const CartState = (props)=>{
    const initialState = {
            itemCount:0,
            items:[]
    }
    const [state,dispatch] = useReducer(CartReducer,initialState); 
    const addToCart = (item) =>{
        dispatch({type:ADD_TO_CART,payload:item });
    }
    const removeFromCart = (id)=>{
        dispatch({type:REMOVE_FROM_CART,payload:id})
    }
    return (
        <CartContext.Provider value={{
               
                items : state.items,
                itemCount: state.itemCount,
                addToCart,
                removeFromCart

        }}>
            {props.children}
        </CartContext.Provider> 
    )

}

export default CartState