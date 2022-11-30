const express = require('express')
const router = express.Router()
const houseModel = require('../models/houseModel')

// router.get('/', async (req, res) => {
    
//     try{
//         const houses = await house.find()
//         res.json(houses)
//     }catch(err){
//         res.status(500).json({message: err.message})
//     }
// })

// // Getting one
// router.get('/:id', (req,res) => {
//     res.send(req.params.id)
// })

// Create one
router.post('/', (req,res) => {
    const addhouse = new house('sok')
    
    console.log(addhouse)
    try{
        const newHouse = addhouse.save()
        res.status(201).json(newHouse)
    }catch(err){
        res.status(400).json({message: err.message})

    }

})

// // Update one
// router.patch('/', (req, res) =>{

// })

// //Deleting one
// router.delete('/:id', (req, res) =>{
    
// })

module.exports = router