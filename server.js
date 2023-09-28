//whenever we see require we are going to a different file to get something
const express = require('express')
const app = express()
const connectDB = require('./config/database') //runs code in 'config/database.js' file;
const homeRoutes = require('./routes/home') //runs code in 'routes/home.js' file
const todoRoutes = require('./routes/todos') //runs code in 'routes/todos.js' file

require('dotenv').config({path: './config/.env'}) //telling the server to listen to the environment variables 

connectDB() //calling the function '/config/database' to run our database

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes) //all of the root routes requests use the 'homeRoutes' constant that runs the 'routes/home.js' file
app.use('/todos', todoRoutes) //all of the '/todos' routes requests use the 'todoRoutes' constant that runs the 'routes/todos.js' file
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    