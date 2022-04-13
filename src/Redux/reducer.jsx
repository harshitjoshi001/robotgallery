const initalState = {
    robots: [],
    filtered: [],
    quantity: [],
    totalQuantity: 0
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
        default: return state
    }
}

export default Reducer