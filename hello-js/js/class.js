'use strict'

// Instead of creating a prototype we can create a class object like below from ES 2015 onwards
class Task {

    constructor(name){
        this.name = name;
        this.completed = false; 
    };
        complete() {
            console.log('Completing task  ' + this.name)
            this.completed = true;
        }
        save() {
            console.log('saving the task  ' + this.name)
    }
}


var task1 =  new Task('Breakfast');
var task2 =  new Task('Lunch');
var task3 =  new Task('Snacks');
var task4 =  new Task('Dinner');


task1.complete(); // Completing task  Breakfast
task2.save(); // saving the task  Lunch
task3.save(); // saving the task  Snacks
task4.save(); // saving the task  Dinner