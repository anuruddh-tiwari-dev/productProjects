const express = require("express")
const cors = require("cors")
const db = require("./db")

const app = express()

app.use(cors())
app.use(express.json())

/* SIGNUP */

app.post("/signup", (req, res) => {

    const { name, email, password } = req.body;

    db.query(
        "INSERT INTO users (name,email,password) VALUES (?,?,?)",
        [name, email, password],
        (err, result) => {

            if (err) {
                console.log(err)
                res.send("Error")
            } else {
                res.send("User Registered")
            }

        }
    )

})

/* ALL PRODUCTS */

app.get("/products", (req, res) => {

    const search = req.query.search || ""

    db.query(
        "SELECT * FROM products WHERE LOWER(title) LIKE LOWER(?)",
        [`%${search}%`],
        (err, result) => {
            res.send(result)
        }
    )

})

/* PRODUCT DETAIL */

app.get("/product/:id", (req, res) => {

    const id = req.params.id

    db.query(
        "SELECT * FROM products WHERE id=?",
        [id],
        (err, result) => {
            res.send(result[0])
        }
    )

})

/* CATEGORY */

app.get("/category/:name", (req, res) => {

    const cat = req.params.name

    db.query(
        "SELECT * FROM products WHERE LOWER(category)=LOWER(?)",
        [cat],
        (err, result) => {
            res.send(result)
        }
    )

})


app.listen(5000, () => {
    console.log("Server Running 5000")
})