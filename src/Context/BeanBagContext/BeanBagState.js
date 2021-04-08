import {  useReducer } from 'react'
import BeanBagContext from './BeanBagContext'
import BeanBagReducer from './BeanBagReducer'
import {
    TOGGLE_IN_CART 
} from '../types'
const BeanBagState = props => {
    const initialState = {
        beanbags:[
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/images.jfif','img/images.jfif','img/images.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/images.jfif','img/images.jfif','img/images.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/images.jfif','img/images.jfif','img/images.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/images.jfif','img/images.jfif','img/images.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/images.jfif','img/images.jfif','img/images.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/images.jfif','img/images.jfif','img/images.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/images.jfif','img/images.jfif','img/images.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/images.jfif','img/images.jfif','img/images.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/images.jfif','img/images.jfif','img/images.jfif'],
                inCart:false
            },
            {
                name: "Name",
                price:2500,
                discountedPrice:1000,
                discountPercent:20,
                imgUrls:['img/images.jfif','img/images.jfif','img/images.jfif'],
                inCart:false
            }
        ]
    }
    const [state, dispatch] = useReducer(BeanBagReducer, initialState)
    const toggleInCart = ( id )=>{
        console.log(id);
        dispatch({type:TOGGLE_IN_CART,payload:id})
    }
    return (
    <BeanBagContext.Provider value={{
        beanbag:state.beanbags,
        toggleInCart
    }} > 
    {props.children}
    </BeanBagContext.Provider>
    )
}
export default BeanBagState
