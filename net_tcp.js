var net = require('net')

var server = net.createServer(function(socket){
    socket.on("data",function(){
        socket.write("hello,world");
    })
    socket.on("end",function(){
        console.log("链接断开！")
    })
    socket.write("欢迎光临dejunwang.com")
})

server.listen(8124,function(){
    console.log("Server Bound........")
})