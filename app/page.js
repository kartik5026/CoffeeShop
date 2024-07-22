

import myCup from "../public/Coffee/cup.png";
import Image from "next/image";
import Link from "next/link";
import Card from "./Components/Card";
import HeroCard from "./Components/HeroCard";
import About from "./Components/About";

import  "./globals.css";


export default function Home() {
  const Croissant = "https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/croissant-01-free-img.png"
  return (
    <>
      <title>Coffee Shop<title/>
      {/* <NavBar /> */}
      {/* I used NavBar in layout.js because i want it to visible for all the children of app folder */}
      
      <div className="container">
        <h1 className="heading">Welcome ! we server the Richest Coffee in the city !</h1>
        <Image src={myCup} width={600} height={600} className="cupImage" alt="Cup Image" layout="responsive"></Image>
      </div>
      
      <div>
        <h1 className="heading">Drinks</h1>
        <p className="heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <Link href={"/"} className="heading"> All Drinks-</Link>
      </div>

      

      <div className="container">
        <Card id="card1" name="Cappuccino" price="4.20" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-01-free-img.png" />
        <Card id="card2" name="Cafe Latte" price="3.15" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-02-free-img.png" />
        <Card id="card3" name="Dark Coffee" price="2.75" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-03-free-img.png" />
      </div>



      
      <div className="container">
        <div className="item">
          <h1>Croissants</h1>
          <h2>Duis aute irure quasi</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
        </div>
        <div className="item">
          <Image src={Croissant} width={600} height={600} alt="product"  layout="responsive"/>
        </div>
      </div>

      
      <div className="heroCard">
        <HeroCard />
      </div>

      <div>
        <About />
      </div>
      
      
      {/* <Footer /> I used footer in layout so that it will be provided everywhere  */}

      
      
    </>
    
  );
}
