

function LogMessage() {

    console.log("Function Basics");
}

LogMessage();



let LogMsg  = function() {

    console.log("Function Basics - Expressions");
}

LogMsg();

renderMessage("Hello Functions");





// Object

let person1 = {
    name:'john',
    age:32
}


// Object Functions

let person = {
    name:'john',
    age:32,

    showInfo: function(){
        renderMessage(this.name);
    }
}


person.showInfo();


// when we are passing a parameter it just update the parameter value not the actual value // passing by value

// but passing a object, it does change the actual object itself // passing by reference



// Button event listener

const button = document.getElementById("submitButton")

button.addEventListener('click', function(){

    console.log('button has ben clicked')
});


// Array

const values = ['a','b','c']

console.log(values);

class car {

    showCar(){
        return 'This is car class'
    }
}


let _car = new car();
_car.showCar();