//1-json-server
const jsonServer=require('json-server')

//2-Create a server application using json server
const restServer =jsonServer.create()

//3-setup path for db.json
const router =jsonServer.router('db.json')

//return a middleware instance used by json server
const middleware =jsonServer.defaults()

//setup port
const port = 3001

//use in server
restServer.use(middleware)
restServer.use(router)

//to run the server
restServer.listen(port,()=>{
    console.log('restserver listening on port'+port);
})