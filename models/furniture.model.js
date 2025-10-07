const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productImage: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
     productPrice: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
    },
    productTitle: {
        type: String,
    },
      rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
    }
}, { timestamps: true }
)

const Product = mongoose.model("Product", productSchema)

module.exports = Product
