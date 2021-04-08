
import {
    TOGGLE_IN_CART 
  } from '../types'
  
  const ReducerFunction = (state,action) => {   
      switch(action.type){
       case TOGGLE_IN_CART :
           
               
                 return {...state,
                  shirts:state.shirts.map((x,idx)=>{ 
                      console.log(action.payload);
                      if( idx===action.payload ){ 
                          return {...x,inCart:!x.inCart}
                       } 
                       return x;
                     })
              } 
      default:
          return state     
  }
  }
  export default ReducerFunction