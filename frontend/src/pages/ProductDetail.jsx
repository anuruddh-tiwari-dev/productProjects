import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const ProductDetail = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {

        axios.get(`http://localhost:5000/product/${id}`)
            .then(res => setProduct(res.data))

    }, [id])

    return (

        <div className="container mt-5">

            <div className="card p-4 shadow">

                <div className="row">

                    <div className="col-md-6 text-center">

                        <img
                            src={product.image}
                            alt=""
                            className="img-fluid rounded"
                            style={{ maxHeight: "350px" }}
                        />

                    </div>

                    <div className="col-md-6">

                        <h2 className="mb-3">{product.title}</h2>

                        <h4 className="text-success mb-3">
                            Price: ₹{product.price}
                        </h4>

                        <p className="badge bg-primary p-2">
                            Category: {product.category}
                        </p>

                        <br />

                        <button className="btn btn-warning mt-3">
                            Add To Cart
                        </button>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ProductDetail