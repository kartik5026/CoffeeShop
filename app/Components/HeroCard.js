import Image from "next/image";

function HeroCard() {
    const heroCardUrl = "https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/coffee-01-free-img.png"
    return (
        <div className="container card ">

            <div className="item">
                <Image src={heroCardUrl} width={600} height={600} alt="Card" layout="responsive"/>
            </div>

            <div className="item">
                <h1>Buy for Home</h1>
                <h2>Totam rem aperiam</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            </div>

        </div>
    )
}
export default HeroCard;
