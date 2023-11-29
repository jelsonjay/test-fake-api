const express = require("express") 
const phones = require("../data/iphone")

const router = express.Router()

// =======GET ALL PHONES=======
router.get("/phone", (req, res) =>{
  res.send(phones)
})


// =======SEARCH BY ID=======
router.get("/phone/:id", (req,res) => {
  const phoneId = parseInt(req.params.id)
  const singlePhone = phones.find((phone) => phone._id === phoneId)

  if(!phoneId){
    return res.status(404).json({message: "Phone not found!"})
  }
  res.json(singlePhone)
})



module.exports = router