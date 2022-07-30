// DEPENDENCIES to be brought in from node modules (require npm install)
let express = require('express')
let cors = require('cors')
let mongoose = require('mongoose')
let app = express()

// CONFIG/MIDDLEWARE
require('dotenv').config()
let PORT = process.env.PORT
app.use(express.json())
app.use(cors())

// MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})

// ROOT ENTRY POINT INDEX 
app.get('/', (req, res) => {
    res.send('main root entry index reached')
})

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port:`, PORT)
})