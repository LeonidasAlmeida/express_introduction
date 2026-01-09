const express = require('express')
const controller = require('../controllers/users_controllers')

const router = express.Router()

router.get("/users",(req, res)=>{
     console.log("all")
})
router.put("/users/:id",(req,res)=>{
     console.log("get")
})
router.delete("/users/:id",(req,res)=>{
     console.log("get")
})


module.exports = router
