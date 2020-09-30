const http = require('http');
const webSocketServer=require('websocket').server
let connection=null;

const httpServer=http.createServer((req,res)=>{
    console.log("Requested");
})

const websocket=webSocketServer({
    "httpServer":httpServer
})

httpServer.listen(8087,()=> console.log('Server running at http://127.0.0.1:8087/'))

websocket.on("request",request=>{
    connection=request.accept(null,request.origin)

    connection.on("open",()=>console.log("Opened"))
    connection.on("close",()=>console.log("Closed"))
    connection.on("message",message=>{
        console.log(`Message received is ${message}`)}
    )
})


