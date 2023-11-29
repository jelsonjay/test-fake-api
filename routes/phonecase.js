const express = require("express") 
const phonecase = require("../data/phonecase")

const router = express.Router()

router.get("/phonecase", (req, res) =>{
  res.send(phonecase)
})



module.exports = router