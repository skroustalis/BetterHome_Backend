if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}

const http = require('http');
const url = require('url')
const express = require('express')
const bodyparser=require('body-parser')
const dotenv = require('dotenv')
const expressLayouts = require('express-ejs-layouts')

const app = express()

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

http.createServer(function(req,res){
    const obj = url.parse(request.url)
    console.log(obj)
    res.end('url ...')
})

let port = process.env.PORT || 3000
app.listen(port, () => console.log('server Started'))