
var CheckObject = function(){}

CheckObject.prototype = {
    checkName:function(){
        console.log('checkName');
        return this;
    },
    checkEmail:function(){
        console.log('checkEmail');
        return this;
    },
    checkPassword:function(){
        console.log('checkPassword');
        return this;
    }
}

var a = new CheckObject()
a.checkName().checkEmail().checkPassword()

