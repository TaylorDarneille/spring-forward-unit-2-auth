const express = require('express') // import express
const app = express() // create an express instance
const ejsLayouts = require('express-ejs-layouts') // import ejs layouts
require('dotenv').config() // allows us to access env vars

// MIDDLEWARE
app.set('view engine', 'ejs') // set the view engine to ejs
app.use(ejsLayouts) // tell express we want to use layouts

// ROUTES
app.get('/', (req, res)=>{
    res.render('home.ejs')
})

// check for an env PORT, otherwise use 8000
const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`Auth app running on ${PORT}`)
})