const express = require('express')
const Router = express.Router()
const saveData = require('./routesController/saveInputData')
const getData = require('./routesController/getData')

Router.get('/', getData)

Router.post('/saveinfo', saveData)

module.exports = Router