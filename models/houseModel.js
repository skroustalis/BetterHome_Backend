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
        type:String
    },
    buy:{
        type:Number
    },
    squareMeter:{
        type:Number
    },
    availableFrom:{
        type:Date
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
    }
    

})

const Housedb = mongoose.model('Housedb',houseSchema )

module.exports = Housedb;