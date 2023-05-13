const express = require('express')
const Router = express.Router()
const saveData = require('./routesController/saveInputData')
const getUserData = require('./routesController/getUserData')
const getConactData = require('./routesController/getConactData')

const loginData = require('./routesController/loginData')
const signupData = require('./routesController/signupData')

const adminLogin = require('./routesController/adminLogin')
const adminSignup = require('./routesController/adminSignup')
const checkUser = require('../middleware/checkUser')
const checkAdmin = require('../middleware/checkAdmin')

Router.post('/saveinfo', saveData)
Router.post('/login', loginData)
Router.post('/signup', signupData)
Router.post('/admin/signup', adminSignup)
Router.post('/admin/login', adminLogin)
Router.get('/get/contactInfo', checkAdmin, getConactData)
Router.get('/get/userInfo', checkAdmin, getUserData)

module.exports = Router