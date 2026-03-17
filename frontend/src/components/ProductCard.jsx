import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {

    return (

        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>

            <div className="product-card">

                <img src={product.image} alt="" />

                <h4>{product.title}</h4>

                <p className="price">₹{product.price}</p>

            </div>

        </Link>

    )

}

export default ProductCard