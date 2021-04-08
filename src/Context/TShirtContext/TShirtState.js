import {  useReducer } from 'react'
import TShirtContext from './TShirtContext'
import TShirtReducer from './TShirtReducer'
import {
    TOGGLE_IN_CART 
} from '../types'
const TShirtState = props => {
    const initialState = {
       tshirts:[
        {
            name: "Name",
            price:2500,
            discountedPrice:1000,
            discountPercent:20,
            imgUrls:['img/tshirt.jfif','img/tshirt.jfif','img/tshirt.jfif'],
            inCart:false
        },
        {
            name: "Name",
            price:2500,
            discountedPrice:1000,
            discountPercent:20,
            imgUrls:['img/tshirt.jfif','img/tshirt.jfif','img/tshirt.jfif'],
            inCart:false
        },
        {
            name: "Name",
            price:2500,
            discountedPrice:1000,
            discountPercent:20,
            imgUrls:['img/tshirt.jfif','img/tshirt.jfif','img/tshirt.jfif'],
            inCart:false
        },
        {
            name: "Name",
            price:2500,
            discountedPrice:1000,
            discountPercent:20,
            imgUrls:['img/tshirt.jfif','img/tshirt.jfif','img/tshirt.jfif'],
            inCart:false
        },
        {
            name: "Name",
            price:2500,
            discountedPrice:1000,
            discountPercent:20,
            imgUrls:['img/tshirt.jfif','img/tshirt.jfif','img/tshirt.jfif'],
            inCart:false
        },
        {
            name: "Name",
            price:2500,
            discountedPrice:1000,
            discountPercent:20,
            imgUrls:['img/tshirt.jfif','img/tshirt.jfif','img/tshirt.jfif'],
            inCart:false
        }
       ]
    }
    const [state, dispatch] = useReducer(TShirtReducer, initialState)
    const toggleInCart = ( id )=>{
        console.log(id);
        dispatch({type:TOGGLE_IN_CART,payload:id})
    }
    return (
    <TShirtContext.Provider value={{
       tshirts : state.tshirts,
        toggleInCart
    }} > 
    {props.children}
    </TShirtContext.Provider>
    )
}
export default TShirtState
