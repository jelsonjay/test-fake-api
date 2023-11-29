const express = require("express") 
const accessories = require("../data/accessories")

const router = express.Router()

router.get("/accessories", (req, res) =>{
  res.send(accessories)
})



module.exports = router