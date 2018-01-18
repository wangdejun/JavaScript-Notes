/**
 * https://www.freecodecamp.org/challenges/make-a-person
 * Make a Person
 * @param {String} firstAndLast 
 */
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var fullArr = firstAndLast.split(' ');

    var firstName = fullArr[0];
    var lastName = fullArr[1];

    this.getFirstName = function(){
      return firstName;
    };

    this.getLastName = function(){
      return lastName;
    };

    this.getFullName = function() {
      return firstName + " "+lastName;
    };

    this.setFirstName = function(firstName_){
        firstName = firstName_;
    };

    this.setLastName = function(lastName_){
        lastName = lastName_;
    };

    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast;
        firstName = firstAndLast.split(' ')[0];
        lastName = firstAndLast.split(' ')[1];
    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();