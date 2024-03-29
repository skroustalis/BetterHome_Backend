const express = require('express')
const router = express.Router()
var Housedb = require('../models/houseModel')

router.get('/allHouses', async (req, res) => {
    try{
        const house = await Housedb.find()
         res.json(house)   
        }catch (err) {
            res.status(500).json({message: err.message})
        }   
})
router.get('/filtered-houses', async (req,res)=>{
    const filters = getFilters(req)

    try{
        const house = await Housedb.find(filters)
         res.json(house)   
        }catch (err) {
            res.status(500).json({message: err.message})
        } 
})

router.post('/newHouse', async  (req, res) => {
    const house = new Housedb({
        name: req.body.name,
        city: req.body.city,
        rent: req.body.rent,
        buy: req.body.buy,
        squareMeter: req.body.squareMeter,
        availableFrom: req.body.availableFrom,
        furnished: req.body.furnished,
        elevator: req.body.elevator,
        petAllowed: req.body.petAllowed,
        flor: req.body.flor,
        typeOfHeating: req.body.typeOfHeating,
        parking: req.body.parking,
        price: req.body.price

    })
    try{
        const newHouse = await house.save()
        res.status(201).json(newHouse)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})



function getFilters(request){
    var filters = {}

    if(typeof request.query.name !== 'undefined'){
        filters['name'] = request.query.name
    }
    if(typeof request.query.city !== 'undefined'){
        filters['city'] = request.query.city
    }
    if(typeof request.query.rent !== 'undefined'){
        filters['rent'] = request.query.rent
    }
    if(typeof request.query.buy !== 'undefined'){
        filters['buy'] = request.query.buy
    }
    if(typeof request.query.squareMeter !== 'undefined'){
        filters['squareMeter'] = request.query.squareMeter
    }
    if(typeof request.query.availableFrom !== 'undefined'){
        filters['availableFrom'] = request.query.availableFrom
    }
    if(typeof request.query.furnished !== 'undefined'){
        filters['furnished'] = request.query.furnished
    }
    if(typeof request.query.elevator !== 'undefined'){
        filters['elevator'] = request.query.elevator
    }
    if(typeof request.query.petAllowed !== 'undefined'){
        filters['petAllowed'] = request.query.petAllowed
    }
    if(typeof request.query.floor !== 'undefined'){
        filters['floor'] = request.query.floor
    }
    if(typeof request.query.typeOfHeating !== 'undefined'){
        filters['typeOfHeating'] = request.query.typeOfHeating
    }
    if(typeof request.query.parking !== 'undefined'){
        filters['parking'] = request.query.parking
    }

    if (typeof request.query.minPrice !== 'undefined' && typeof request.query.maxPrice === "undefined"){
    filters['price'] = {$gte:request.query.minPrice}
    }

    if (typeof request.query.maxPrice !== 'undefined' && typeof request.query.minPrice === 'undefined'){
    filters['price'] = {$lte: request.query.maxPrice}
    }   
    
    if (typeof request.query.minPrice !== 'undefined' && typeof request.query.maxPrice !== 'undefined'){
    filters['price'] = {$gte: request.query.minPrice, $lte: request.query.maxPrice}
    }

    //////

    if (typeof request.query.minSquareMeter !== 'undefined' && typeof request.query.maxSquareMeter === "undefined"){
    filters['squareMeter'] = {$gte:request.query.minSquareMeter}
    }

    if (typeof request.query.maxSquareMeter !== 'undefined' && typeof request.query.minSquareMeter === 'undefined'){
    filters['squareMeter'] = {$lte: request.query.maxSquareMeter}
    }   
    
    if (typeof request.query.minSquareMeter !== 'undefined' && typeof request.query.maxSquareMeter !== 'undefined'){
    filters['squareMeter'] = {$gte: request.query.minSquareMeter, $lte: request.query.maxSquareMeter}
    }

    /////

    if (typeof request.query.minFloor !== 'undefined' && typeof request.query.maxFloor === "undefined"){
    filters['floor'] = {$gte:request.query.minFloor}
    }

    if (typeof request.query.maxFloor !== 'undefined' && typeof request.query.minFloor === 'undefined'){
    filters['floor'] = {$lte: request.query.maxFloor}
    }   
    
    if (typeof request.query.minFloor !== 'undefined' && typeof request.query.maxFloor !== 'undefined'){
    filters['floor'] = {$gte: request.query.minFloor, $lte: request.query.maxFloor}
    }
    
    if(typeof request.query.photo !== 'undefined'){
        filters['photo'] = request.query.photo
    }

    return filters
}



module.exports = router