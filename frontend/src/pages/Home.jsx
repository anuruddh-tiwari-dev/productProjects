import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import "./index.css"
import Slider from "../components/Slider"



const Home = () => {

    const [products, setProducts] = useState([])

    /* Load Products */

    useEffect(() => {

        axios.get("http://localhost:5000/products")
            .then(res => setProducts(res.data))

    }, [])

    /* Search */

    const searchProduct = async (search) => {

        const res = await axios.get("http://localhost:5000/products")

        const filtered = res.data.filter(p =>
            p.title.toLowerCase().includes(search.toLowerCase())
        )

        setProducts(filtered)

    }

    /* Category */

    const categoryFilter = async (cat) => {

        const res = await axios.get(
            `http://localhost:5000/category/${cat}`
        )

        setProducts(res.data)

    }

    return (

        <div>

            <Navbar
                searchProduct={searchProduct}
                categoryFilter={categoryFilter}
            />
            <Slider />

            <div className="products">

                {
                    products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))
                }

            </div>
            <Footer />

        </div>

    )

}

export default Home