// import json library
const jsonServer = require('json-server')

// 2) create the server 
const mediaPlayerServer = jsonServer.create()

// middleware to parse the json formate
const middleware = jsonServer.defaults()

// setup path to store data
const router = jsonServer.router('db.json')

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// 3) poert for server
const PORT = 4000 || process.env.PORT

// 4) to listen to the request from the frontend for the resolve that request
mediaPlayerServer.listen(PORT, ()=>{
    console.log(`server running sucessfully at port number ${PORT}`);
})