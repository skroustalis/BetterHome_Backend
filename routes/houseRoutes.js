const express = require('express')
const router = express.Router()
var Housedb = require('../models/houseModel')

router.get('/allHouses', async (req, res) => {
    try{
        const house = await Housedb.find()//.pretty()
         res.json(house)   
        }catch (err) {s
            res.status(500).json({message: err.message})
        }   
})
router.get('/house', async (req,res)=>{
    // console.log((req.query))
    // return res.json({
    //     message:"hello",
    //     name: req.query.name,
    let city= req.query.city
    //     rent: req.query.rent,
    //     buy: req.query.buy,
    //     squareMeter: req.query.squareMeter,
    //     availableFrom: req.query.availableFrom,
    //     furnished: req.query.furnished,
    //     elevator: req.query.elevator,
    //     petAllowed: req.query.petAllowed,
    //     flor: req.query.flor,
    //     typeOfHeating: req.query.typeOfHeating
    // })
    // console.log(name)

    let name = req.query.name

  
    Housedb.find({name,city},(error, data) =>{
        if(error){
            console.log(error)
        }else{
            console.log(data)
        }
    })
    var findHousesByCity = function(userName,cityName, done){
        Housedb.find({name:userName, city:cityName},(error, arrayOfResults)=>{
            if(error){
                console.log(error)
            }else{
             done(null, arrayOfResults)
            }
        })
    }
})

router.get('/house')

router.post('/newHouse', async  (req, res) => {
    // var a = {name: req.body.name}
    // console.log(a)
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
    console.log(req)
    try{
        const newHouse = await house.save()
        res.status(201).json(newHouse)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})



// Create one
// router.post('/',(req,res) => {
//     if(!req.body){
//         res.status(400).send({message:"cannot be empty"});
//         return;
//     }

//     const house = new Housedb({
//         name:req.body.name
//     })

//     house
//         .save(house)
//         .then(data=>{
//             res.send(data)
//         })
//         .catch(err=>{
//             res.status(500).send({
//                 message:err.message || "some error"
//             });
//         });
// })

// // Update one
// router.patch('/', (req, res) =>{

// })

// //Deleting one
// router.delete('/:id', (req, res) =>{
    
// })

module.exports = router