import React from "react";
import '../App.css'
import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkQuantity, addProduct, removeProduct,productCount } from "../Redux/action";

const Details = () => {
    const [state, setState] = useState(0)
    const [nav, setNav] = useState(false)
    const { id } = useParams()
    const dispatch = useDispatch()
    const mystate = useSelector(state => state.robots)
    const selectedRobot = mystate[id];
    const count = useSelector(state => state.quantity)
    const [num, setNum] = useState(false)
    const counting = useSelector(state=>state.countProduct)
    const check = () => {
        if (selectedRobot.stock == 0) {
            alert("!!this product is out of stock")
        }
        else {
            setNum(true)
        }
        if (count.length > 4) {
            alert("can't add more than five varities!!!!")
        }
        else {
            // dispatch(checkQuantity(selectedRobot))
        }
    }
    useEffect(() => {
        if (count.length > 5) {
            alert("you cant add more than 5 varities")

        }
    }, [count.length])

    useEffect(() => {
        if (selectedRobot.stock < state+1) {
            alert(`only ${selectedRobot.stock} are available`);
        }
    }, [state])

    const addManageCart = () => {
        dispatch(productCount(selectedRobot))
        console.log(counting);        
        if (selectedRobot.stock > state) {
            dispatch(addProduct())
        setState(state + 1);

        }

    }
    const Addtocart = () => {
        setNav(true)
    }
    return (
        <>
            <div className="show-container">
                {nav ? <Navigate to={`/cart`} /> : " "}
                <div className="inner-container">
                    <img src={selectedRobot.image} style={{ "boxShadow": "2px 2px 2px 2px grey" }} />
                    <h2 style={{ "boxShadow": "2px 2px 2px 2px grey" }}>Name :{selectedRobot.name}</h2>
                    <h2 style={{ "boxShadow": "2px 2px 2px 2px grey" }}> Material :{selectedRobot.material}</h2>
                    <h2 style={{ "boxShadow": "2px 2px 2px 2px grey" }}>Price :฿{selectedRobot.price}</h2>
                    <h2 style={{ "boxShadow": "2px 2px 2px 2px grey" }}>stock :{selectedRobot.stock}</h2>

                    {num ? <div><h3>Add :</h3><button onClick={() => {
                        if (state > 0) {
                            setState(state - 1);
                            dispatch(removeProduct())
                        }
                    }}>-</button>{state}<button onClick={addManageCart}>+</button></div> : ""}
                    {num ? <button onClick={Addtocart}>Add to Cart</button> : ""}
                    {num ? "" : <button onClick={() => { check() }}>Buy</button>}
                </div>
            </div>
        </>
    )
}
export default Details