//router file
const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) //all of the root route get requests use the 'homeController' constant that runs the 'controllers/home.js' file to use the getIndex method

module.exports = router