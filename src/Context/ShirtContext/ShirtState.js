import {  useReducer } from 'react'
import ShirtContext from './ShirtContext'
import ShirtReducer from './ShirtReducer'
import {
    TOGGLE_IN_CART 
} from '../types'
const ShirtState = props => {
    const initialState = {
        shirts:[
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/shirt.jfif','img/shirt.jfif','img/shirt.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/shirt.jfif','img/shirt.jfif','img/shirt.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/shirt.jfif','img/shirt.jfif','img/shirt.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/shirt.jfif','img/shirt.jfif','img/shirt.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/shirt.jfif','img/shirt.jfif','img/shirt.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/shirt.jfif','img/shirt.jfif','img/shirt.jfif'],
                inCart:false
            }
        ]
    }
    const [state, dispatch] = useReducer(ShirtReducer, initialState)
    const toggleInCart = ( id )=>{
        console.log(id);
        dispatch({type:TOGGLE_IN_CART,payload:id})
    }
    return (
    <ShirtContext.Provider value={{
        shirts:state.shirts,
        toggleInCart
    }} > 
    {props.children}
    </ShirtContext.Provider>
    )
}
export default ShirtState