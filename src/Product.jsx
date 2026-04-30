import "./Product.css"
import Price from "./Price"


function Product({title,index}){
    const oldPrices = ["799", "1999", "3499", "1599"];
    const newPrices = ["499", "1299", "2499", "999"];
    const descriptions = [
                            "Smooth and precise wireless mouse with long battery life",
                            "High-quality sound with deep bass and comfortable fit",
                            "Track your fitness, heart rate, and notifications on the go",
                            "RGB backlit keyboard with responsive keys for gaming"
                        ];
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>{descriptions[index]}</h5>
            <p>Product</p> <br />  
            <Price oldPrice = {oldPrices[index]} newPrice = {newPrices[index]} />
        </div>
    )
}

export default Product;