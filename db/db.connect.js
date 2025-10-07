const mongoose = require("mongoose")
require("dotenv").config()

const MongoUri = process.env.MONGODB

const intializeDatabase = async () => {
    await mongoose
    .connect(MongoUri)
    .then(() => {
        console.log("Connected to database.")
    })
    .catch((error) => { 
        console.log("Error in connecting to database.", error)  
    })
}

module.exports = { intializeDatabase } 