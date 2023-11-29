const express = require("express") 
const watches = require("../data/watches")

const router = express.Router()

router.get("/watch", (req, res) =>{
  res.send(watches)
})

// =======SEARCH BY ID=======
router.get("/watch/:id", (req,res) => {
  const watcheId = parseInt(req.params.id)
  const singleWatch = watches.find((watch) => watch._id === watcheId)

  if(!watcheId){
    return res.status(404).json({message: "Watch not found!"})
  }
  res.json(singleWatch)
})



module.exports = router