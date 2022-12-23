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
    floor:{
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
    },
    photo:{
        type:String
    }
    

})

const Housedb = mongoose.model('Housedb',houseSchema )

module.exports = Housedb; 
