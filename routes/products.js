const express = require("express") 
const products = require("../data/products")

const router = express.Router()

// =======GET ALL PRODUCTS=======
router.get("/products", (req, res) =>{
  res.send(products)
})


// =======SEARCH BY ID=======
router.get("/products/:id", (req,res) => {
  const productId = parseInt(req.params.id)
  const singleProduct = products.find((product) => product._id === productId)

  if(!productId){
    return res.status(404).json({message: "Product not found!"})
  }
  res.json(singleProduct)
})



module.exports = router