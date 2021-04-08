import {  useReducer } from 'react'
import TrouserContext from './TrouserContext'
import TrouserReducer from './TrouserReducer'
import {
   TOGGLE_IN_CART
} from '../types'
const TrouserState = props => {
    const initialState = {
        trousers : [
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/trouser.jfif','img/trouser.jfif','img/trouser.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/trouser.jfif','img/trouser.jfif','img/trouser.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/trouser.jfif','img/trouser.jfif','img/trouser.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/trouser.jfif','img/trouser.jfif','img/trouser.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/trouser.jfif','img/trouser.jfif','img/trouser.jfif'],
                inCart:false
            }
        ] 
    }
    const [state, dispatch] = useReducer(TrouserReducer, initialState)

    const toggleInCart = ( id )=>{
        console.log(id);
        dispatch({type:TOGGLE_IN_CART,payload:id})
    }
    return (
    <TrouserContext.Provider value={{
        trousers : state.trousers,
        toggleInCart
    }} > 
    {props.children}
    </TrouserContext.Provider>
    )
}
export default TrouserState
