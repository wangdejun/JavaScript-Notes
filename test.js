function person(firstname,lastname,age,eyecolor){
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
	this.eyecolor = eyecolor
}

var herFather = new person("John","Doe",50,"blue")
var herMather = new person("Sally","Rally",48,"green")

console.log(person)
console.log(herMather)
console.log(herFather)
console.log(herFather.eyecolor)