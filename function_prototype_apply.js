function Point(x,y){
	this.x=x;
	this.y=y;
}

Point.prototype.move=function(x,y){
	this.x+=x;
	this.y+=y;
}

var p = new Point(0,0);

p.move(2,2);
console.log(p)


var circle = {x:1,y:1,r:1}
p.move.apply(circle,[2,1])
console.log(p)

p.move.call(circle,{x:3,y:2,r:1})
console.log(circle)