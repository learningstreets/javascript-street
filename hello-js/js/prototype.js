/*
PROTOTYPE

An encapsulation of properties that an object links to

*/


// file1
// Constructor

var Task = function(name){
    this.name = name;
    this.completed = false; 
}


// Prototype - by below we are creating a prototype of complete function, such that for every object creation 
// this complete will refer from below - more efficient

Task.prototype.complete = function() {
    console.log('Completing task  ' + this.name)
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('saving the task  ' + this.name)
}


// file2

var task1 =  new Task('Breakfast');
var task2 =  new Task('Lunch');
var task3 =  new Task('Snacks');
var task4 =  new Task('Dinner');


task1.complete(); // Completing task  Breakfast
task2.save(); // saving the task  Lunch
task3.save(); // saving the task  Snacks
task4.save(); // saving the task  Dinner
