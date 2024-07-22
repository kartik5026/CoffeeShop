"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../My-Redux/Slice";
import Confetti from "./Confetti";
function Card(props) {
    const dispatch = useDispatch();
    const obj = {
        imgUrl: props.imgUrl,
        price: props.price,
        name: props.name
    }
    function handleClick() {
        alert("Order Placed");
        dispatch(addToCart(obj))
    }
    return (
        <div className="card" id={props.id}>
            <div className="cardItem">
                <Image src={props.imgUrl} width={200} height={200} alt="product" layout="responsive"></Image><br />
                <h2>${props.price}</h2>
                <h1>{props.name}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                {/* <button onClick={() => handleClick()}></button> */}
                <span onClick={() => handleClick()}><Confetti/></span>
            </div>
        </div>
    )
}
export default Card;