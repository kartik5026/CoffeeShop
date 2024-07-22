import Image from "next/image";
function Gallery(){
    return(
        <>
            <h1 className="heading"> Gallery </h1>

            <div className="container">
                <div> <Image className="galleryImg" src={"https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-01-free-img.jpg"} height={400} width={500} layout="responsive"></Image></div>
                <div> <Image className="galleryImg" src={"https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-02-free-img.jpg"} height={300} width={200} layout="responsive"></Image></div>
                <div> <Image className="galleryImg" src={"https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-03-free-img.jpg"} height={300} width={200} layout="responsive"></Image></div>
            </div>

            <div className="galleryDiv">
                <div className="galleryItem"> <Image  className="galleryImg" src={"https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-08-free-img.jpg"} height={200} width={300} layout="responsive"></Image></div>
                <div className="galleryItem"> <Image  className="galleryImg" src={"https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-09-free-img.jpg"} height={200} width={300} layout="responsive"></Image></div>
                <div className="galleryItem"> <Image  className="galleryImg" src={"https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-06-free-img.jpg"} height={200} width={300} layout="responsive"></Image></div>
                <div className="galleryItem"> <Image  className="galleryImg" src={"https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-07-free-img.jpg"} height={200} width={300} layout="responsive"></Image></div>
                <div className="galleryItem"> <Image  className="galleryImg" src={"https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-05-free-img.jpg"} height={200} width={300} layout="responsive"></Image></div>
                <div className="galleryItem"> <Image  className="galleryImg" src={"https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-04-free-img.jpg"} height={200} width={300} layout="responsive"></Image></div>
            </div>
        </>
    )
}
export default Gallery;