import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./signup.css";

const Signup = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:5000/signup", user)
            alert("Signup Successful")
        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div className="signup-page">

            <Navbar />

            <div className="signup-container">

                <h2 className="signup-title">Create Account</h2>

                <form className="signup-form" onSubmit={handleSubmit}>

                    <input
                        placeholder="Enter Name"
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />

                    <input
                        placeholder="Enter Email"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />

                    <button className="signup-btn">Signup</button>

                </form>

            </div>

            <Footer />

        </div>

    )

}

export default Signup