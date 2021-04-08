import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../types'

const CartReducer = (state,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                 items:[ ...state.items , action.payload ] ,
                 itemCount : state.itemCount+1 
                
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                    items: state.items.filter( (item,idx)=> idx!==action.payload  ) ,
                    itemCount: (state.itemCount - 1 >= 0)?state.itemCount - 1 : 0      
            } 
         default:
            return state;
    }
}
export default CartReducer