const express = require('express')
const Router = express.Router()
const saveData = require('./routesController/saveInputData')
const getData = require('./routesController/getData')
const loginData = require('./routesController/loginData')
const signupData = require('./routesController/signupData')


Router.get('/getinfo', getData)

Router.post('/saveinfo', saveData)
Router.post('/login', loginData)
Router.post('/signup', signupData)

module.exports = Router