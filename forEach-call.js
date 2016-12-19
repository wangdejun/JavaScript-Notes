function forEach(list,callback){
    for(var n=0;n<list.length;n++){
        callback.call(list[n],n)
    }
}
var weapons = ["guns","canons","knife"]

forEach(weapons,function(index){
    console.log(index,weapons[index])
})