import { Action } from "history"

export const loadItems = (data)=>{
    return ({
        type : "LOADITEMS",
        payload : data
    })
}

export const searchByName = (data)=>{
    return ({
        type : "SEARCHBYMATERIAL",
        payload : data
    })
}

export const addToCart = (data)=>{
    return(
        {
            type : "ADDTOCART",
            payload : data
        }
    )
}

export const checkQuantity = (data)=>{
  return(
      {
          type : "CHECKQUANTITY",
          payload : data
      }
  )
}

export const addProduct = (data)=>{
    return(
        {
            type : "ADDPRODUCT",
            payload : data
        }
    )
}

export const removeProduct = (data)=>{
    return(
        {
            type : "REMVPRODUCT",
            payload : data
        }
    )
}


export const total = (data)=>{
    return(
        {
            type : "TOTALQUANTITY",
            payload : data
        }
    )
}

export const deleteItem = (data)=>{
    return{
         type :"DELETEITEM",
         payload : data
    }
}

export const clearCart  = (data)=>{
    return{
        type : "CLEARCART",
        payload : data
    }
}

export const productCount = (data) =>{
     return{
         type : "PRODUCTCOUNT",
         payload : data
     }
}

export const getCartItems = (data)=>{
    return(
        {
            type : 'GETCARTITEMS',
            payload : data
        }
    )
}

export const addFromCart = (data) =>{
    return(
        {
            type : "ADDFROMCART",
            payload : data
        }
    )
}

export const removeFromCart = (data)=>{
    return(
        {
            type : "REMOVEFROMCART",
            payload : data
        }
    )
}