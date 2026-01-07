const express = require('express')
const PORT = 3000
const consign = require('consign')
const routes = require('./routes/routes_index')
const app = express()

//middleware
//for formate the output of json 
//routes
consign()
.include('middlewares')
.then('models')
.then('routes')
.then("libs")
.into(app)


