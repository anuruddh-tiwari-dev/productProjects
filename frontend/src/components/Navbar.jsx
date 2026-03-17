import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = ({ searchProduct, categoryFilter }) => {

    const [search, setSearch] = useState("")

    return (

        <div className="navbar">

            <h2>Product Company</h2>

            {/* Category Buttons */}

            <button onClick={() => categoryFilter("clothes")}>Clothes</button>
            <button onClick={() => categoryFilter("milk")}>Milk</button>
            <button onClick={() => categoryFilter("animal")}>Animals</button>

            {/* Search */}

            <input
                placeholder="Search product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={() => searchProduct(search)}>
                Search
            </button>

            {/* Navigation Links */}

            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/signup">Signup</Link>

            </div>

        </div>

    )

}

export default Navbar