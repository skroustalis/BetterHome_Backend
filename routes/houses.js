const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

// Getting one
router.get('/:id', (req,res) => {
    req.params.id
})

// Create one
router.post('/', (req,res) => {

})

// Update one
router.patch('/', (req, res) =>{

})

//Deleting one
router.delete('/:id', (req, res) =>{
    
})

module.exports = router