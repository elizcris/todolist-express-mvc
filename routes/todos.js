const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')
 //all of the '/todos' route requests use the 'todosController' constant that runs the 'controllers/todos.js' file to use the applicable method

router.get('/', todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router