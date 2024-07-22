import Image from "next/image";
import myLogo from "../../public/Coffee/logo.png";
import Link from "next/link";
function NavBar() {
    return (
        <div className="container">
            <div className="navImgItem">
                <Image src={myLogo} width={100} height={100} alt="Logo"></Image>
                
            </div>
            
            <div className="navItem">
                <Link href={"/"}>Home</Link>
                <Link href={"/menu"}>Our Menu</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/gallery"}>Gallery</Link>
                <Link href={"/contact"}>Contact</Link>
                <Link href={"/orders"}>Orders</Link>
            </div>
        </div>
    )
}
export default NavBar;