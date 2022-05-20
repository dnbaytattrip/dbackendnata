const express = require('express')
const Router = express.Router()
const saveData = require('./routesController/saveInputData')
const getData = require('./routesController/getData')
const loginData = require('./routesController/loginData')
const signupData = require('./routesController/signupData')
const checkUser = require('../middleware/checkUser')

Router.get('/getinfo', checkUser, getData)
Router.post('/saveinfo', saveData)
Router.post('/login', loginData)
Router.post('/signup', signupData)

module.exports = Router