const { intializeDatabase } = require("./db/db.connect")
const Product = require("./models/furniture.model")
const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

intializeDatabase() 

app.get("/", (req, res) => {
    res.send("Welcome to e-commerce website(furniture)!!")
})

app.get("/products", async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({ error: "Error fetching products." })
    }
})

app.post("/products", async (req, res) => {
    try {
        const newProduct = Product(req.body)
        const savedProduct = await newProduct.save()
        res.status(201).json({message: "Product added successfully!", savedProduct})
    } catch (error) {
        res.status(500).json({error: "Error in adding product."})
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
