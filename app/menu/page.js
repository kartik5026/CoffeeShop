import Card from "../Components/Card";
function Menu() {
    return (
        <>
            <h1 className="heading">Our Menu</h1>
            <div>
                <h1 className="heading">Drinks</h1>
                <p className="heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <div className="menuCard">
                    <div className="menuItem"><Card id="card1" name="Cappuccino" price="4.20" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-01-free-img.png" /></div>
                    <div className="menuItem"><Card id="card2" name="Cafe Latte" price="3.15" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-02-free-img.png" /></div>
                    <div className="menuItem"><Card id="card3" name="Dark Coffee" price="2.75" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-03-free-img.png" /></div>
                    <div className="menuItem"><Card id="card1" name="Cappuccino" price="4.20" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-01-free-img.png" /></div>
                    <div className="menuItem"><Card id="card3" name="Dark Coffee" price="2.75" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-03-free-img.png" /></div>
                    <div className="menuItem"><Card id="card1" name="Cappuccino" price="4.20" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-01-free-img.png" /></div>
                    <div className="menuItem"><Card id="card2" name="Cafe Latte" price="3.15" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-02-free-img.png" /></div>
                    <div className="menuItem"><Card id="card1" name="Cappuccino" price="4.20" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-01-free-img.png" /></div>
                </div>

                <div>
                    <h1 className="heading">Coffee For Home</h1>
                    <p className="heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <div className="menuCard">
                        
                        <div className="menuItem"><Card id="card1" name="Arabica" price="24.20" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-06-free-img.png" /></div>
                        <div className="menuItem"><Card id="card2" name="Liberica" price="19.20" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-07-free-img.png" /></div>
                        <div className="menuItem"><Card id="card3" name="Robusta" price="30.20" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-05-free-img.png" /></div>
                        <div className="menuItem"><Card id="card1" name="Excelsa" price="34.20" imgUrl="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-04-free-img.png" /></div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Menu;