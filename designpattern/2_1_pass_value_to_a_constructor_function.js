var Book = function(id, bookname, price){
	this.id = id;
	this.bookname = bookname;
	this.price = price;
}

Book.prototype= {
	showBooKName : function(){return this.bookname;},
	showId : function(){return this.id;},
	showPrice: function(){return this.price;}
}


var abook = new Book(1,"JavaScript Design Pattern",28.3);
console.log(abook.showBooKName());
console.log(abook.showId());
console.log(abook.showPrice())


console.log(Book.prototype.constructor);