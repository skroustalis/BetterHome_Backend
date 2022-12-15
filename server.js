
const express = require('express')
const bodyparser=require('body-parser')
const dotenv = require('dotenv')
const expressLayouts = require('express-ejs-layouts')

var port = process.env.PORT || 3000;

const app = express()
dotenv.config({path:'.env'})

const db = require('./database/connection')

db();

app.set('view engine','ejs')
app.set('views', __dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}))

const housesRouter =require('./routes/houseRoutes')
app.use('/', housesRouter)

app.listen(port, () => console.log('server Started'))