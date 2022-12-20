const mongoose = require('mongoose')

var houseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city:{
        type:String,
        required:true
    },
    rent:{
        type:Boolean
    },
    buy:{
        type:Boolean
    },
    squareMeter:{
        type:Number
    },
    availableFrom:{
        type:String
    },
    furnished:{
        type:Boolean
    },
    elevator:{
        type:Boolean
    },
    petAllowed:{
        type:Boolean
    },
    flor:{
        type:Number
    },
    typeOfHeating:{
        type:String
    },
    parking:{
        type:Boolean
    },
    price:{
        type:Number
    }
    

})

const Housedb = mongoose.model('Housedb',houseSchema )

module.exports = Housedb; 


// Housedb.find({city:'thessaloniki'},(error, data) =>{
//     if(error){
//         console.log(error)
//     }else{
//         // console.log(data)
//     }
// })

// var findHousesByCity = function(cityName, done){
//     Housedb.find({city: cityName},(error, arrayOfResults)=>{
//         if(error){
//             console.log(error)
//         }else{
//          done(null, arrayOfResults)
//         }
//     })
//    // done(null)
// }