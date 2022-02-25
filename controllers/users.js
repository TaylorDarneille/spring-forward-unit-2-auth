const express = require('express')
const router = express.Router()

router.get('/new', (req, res)=>{
    res.render('users/new.ejs')
})

// export all these routes to the entry point file
module.exports = router