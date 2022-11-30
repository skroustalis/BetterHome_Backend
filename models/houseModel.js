const mongoose = require('mongoose')

const houseSchema = new mongoose.Schema({
    name: String
})
function house(name){
    this.name=name;
}

mongoose.exports = mongoose.model('house',houseSchema )