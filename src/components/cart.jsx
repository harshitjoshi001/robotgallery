import React from 'react'
import '../App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearCart, deleteItem,removeProduct ,getCartItems ,addFromCart, removeFromCart} from '../Redux/action'
import { useEffect ,useState } from 'react'

const Cart = () => {
    const dispatch = useDispatch();
    const counting = useSelector(state=>state.countProduct)
    const [finalList,setFinalList] = useState([])
    const [check , setCheck] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)


      useEffect(()=>{
        const List = [...counting.reduce((mp, o) => {
            if (!mp.has(o.material)) mp.set(o.material, { ...o, count: 0 });
            mp.get(o.material).count++;
            return mp;
          }, new Map).values()]; 
          setFinalList(List)   
      },[check,counting])
   
      const deleteItm = (param)=>{
        let New = finalList.filter((data)=>data.name!==param)
        console.log(New);
        setFinalList(New)
        dispatch(removeProduct())
   }

   const inc = (param)=>{
       
           
        const flter = finalList.filter((data)=>data.name===param.name)
        if(flter[0].stock>flter[0].count){
        dispatch(addFromCart(flter[0]))
        console.log(flter);
        setCheck(check+1)
        setTotalPrice((param.count *param.price) + totalPrice)
       }else{
           alert(`only ${flter[0].stock} items are available`)
       }
      
   }


   const dec = (name)=>{
   const filtered = finalList.filter((data)=>data.name===name);
    
   if(filtered && filtered[0].count >0)
     {
         counting.shift();
         dispatch(removeFromCart(counting))
         setCheck(check-1)
         dispatch(removeProduct())
     }
     
}
    return (
        <div>
            <div className='cart-container'>
                <h1>Your Cart</h1>
                {finalList.length>0 ?finalList.map((data) => {
                    return (
                        <ul>
                            <li className='list-item'><img src={data.image} />
                                Name :{data.name}<button className='btn' onClick={()=>{dec(data.name)}}>-
                                </button>{data.count}<button className='btn' onClick={()=>{inc(data)}}>+</button>
                                <button className='dlt-btn' onClick={()=>{deleteItm(data.name)}}>Delete</button><h8 className="qnty-heading">
                                    Quantity : {data.count }*{data.price}</h8>
                                    <h8>Price :  {(data.count *data.price).toFixed(2)}</h8>
                                   
                                    </li>
                                   
                        </ul>
                    )
                }) : <h1 className='list-item'>your cart is empty</h1>}

                <button onClick={()=>{
                    setTotalPrice(0)
                    dispatch(clearCart())}} className="dlt-btn">Clear Cart</button>

            </div>
        </div>
    )
}

export default Cart







