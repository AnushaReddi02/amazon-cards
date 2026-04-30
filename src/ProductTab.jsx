import Product from "./Product.jsx"

function ProductTab(){
    const styles = {
        display : "flex",
        flexWrap : "wrap",
        alignItems : "center",
        justifyContent : "center"
    }
    return(
        <div style={styles}>
            <Product title="Bluetooth Headphones" index={0}/>
            <Product title="Smart Watch" index={1}/>
            <Product title="Gaming Keyboard" index={2}/>
            <Product title="Wireless Mouse" index={3}/>
        </div>
    )
}

export default ProductTab;