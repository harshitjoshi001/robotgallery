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