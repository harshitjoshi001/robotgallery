const initalState = {
    robots: [],
    filtered: [],
    quantity: [],
    totalQuantity: 0,
    countProduct: [],
    cartItems: []
}

const Reducer = (state = initalState, action) => {
    switch (action.type) {
        case "LOADITEMS":
            return {
                ...state,
                robots: action.payload
            }
        case "SEARCHBYMATERIAL":
            return {
                ...state,
                robots: action.payload
            }
        case "ADDTOCART":
            return {
                ...state,

            }
        case "CHECKQUANTITY":
            return {
                ...state,
                quantity: [...state.quantity, action.payload],
            }
        case "ADDPRODUCT":
            return {
                ...state,
                totalQuantity: state.totalQuantity + 1
            }

        case "REMVPRODUCT":
            return {
                ...state,
                totalQuantity: state.totalQuantity - 1
            }

        case "DELETEITEM":

            return {
                ...state,
                cartItems: action.payload
            }

        case "CLEARCART":
            return {
                ...state,
                countProduct : [],
                totalQuantity: 0
            }

        case "PRODUCTCOUNT":
            return {
                ...state,
                countProduct: [...state.countProduct, action.payload]
            }

        case 'GETCARTITEMS':
            return {
                ...state,
                cartItems: action.payload
            }

        case "ADDFROMCART" : 
        return{
                  ...state,
                  countProduct : [...state.countProduct,action.payload],
                  totalQuantity : state.totalQuantity +1

              }   
              
        case "REMOVEFROMCART" : 
              return {
                  ...state,
                  countProduct : action.payload
              }      
        default: return state
    }
}

export default Reducer