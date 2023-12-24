//How to create an objects

// we can create an object with any of below syntax

//1.

var objType1 = {}  // will create empty object later we can add properties

var objType1_1 = {
    prop1_1:"This is property 1_1"
} 

objType1.prop1 = "This is property 1";
objType2.prop2_1 = "This is property 2";

//2. 

var objType2 = Object.create(Object.prototype);

var objType2_1 = Object.create(Object.prototype, {prop2_1 : "This is property 2_2"});


//3. 

var objType3 = new Object();

objType3.prop3 = "This is property 3"



// Object defineProperty

var task = {
    title : "This is title"
}

Object.defineProperty(task, 'showMe', {
    value : function() {
        return this.title;
    },

    writable:true, // this is will prevent write operation on showMe
enumerable:true, // it will hide this property 
configurable:true // this prevents from configure further, if set false this piece of code will be the final one

})

console.log(task.showMe()); // output would be "This is title"


// but let's change the property value 
task.showMe = 'Why ?'
console.log(task.showMe()); // it will show error as showMe not a method now. 

//so to just stop changing the variable type later or make it as a const we can set writable:false, and that's it





 









