"use client"
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import "../globals.css";
import { removeFromCart,clearCart } from "../My-Redux/Slice";
import Link from "next/link";

function Orders() {
    const dispatch = useDispatch();
    const arr = useSelector((state) => {
        return state.Slice;
    })
    
    if(arr.length ==0){
        return(
            <>
            <h1 className="heading">Your Cart is Empty:  Go To Menu and Add some Items</h1>
            
            </>
        )
    }

    function deleteItem(){
        
        dispatch(removeFromCart());
    }
    
    function clearItems(){
        dispatch(clearCart());
    }
    
    return (
        <>
            <h1> Your Orders</h1>
            <button onClick={()=> clearItems()}>Clear Your Orders</button>
            <div className="orders">
            {
                arr.map((order, id) => (
                    
                        <li key={id} className="orderItem">
                            <p><Image src={order.imgUrl} width={200} height={200} alt="product" /></p>
                            <p>${order.price}</p>
                            <p>{order.name}</p>
                            <button onClick={()=>deleteItem(id)}>Remove</button>
                        </li>
                    
                ))
            }
            </div>
        </>
    )
}
export default Orders;