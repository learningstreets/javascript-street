

/*

Design Patterns

CREATIONAL DESIGN PATTERN

Constructor Pattern
Use to create new objects with their own Object scope.

new : it creates a brand new object , it's a constructor function

*/


function ObjectName(param1, param2){

    this.param1 = param1;
    this.param2 = param2;
}

// A. Constructor Pattern

var Task = function(name){
    this.name = name;
    this.completed = false;
    this.complete = function(){
        console.log('Completing task  ' + this.name)
        this.completed = true;
    }

    this.save = function(){
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



// Drawback: every time when we are creating an object or copy of it, complete function gets created  over and over





//*********************************************************************************************

// B. Module Pattern
// wrap it it a function this  will call from database

var repo = function(id) {
    return {
        get: function(id){
            console.log('Getting Task ' + id);
            return {
               name: " New Task from db"
            }
        },

        save: function(task) {
            console.log('Saving ' + task.name + ' to the db');
        }
    }

}


var task11 = new Task(repo.get(1));
task11.complete();


//*********************************************************************************************

// C. Factory Pattern
// A Pattern which simplify the object creation



// have a methods which will return the modules to the required code

// like:

var module1 = require('./functions')
var module2 = require('./class')
var module3 = require('./objects')

// Instead above we can do like

var moduleType = function() {

    this.getModule = function(moduleName){
        if(moduleName === 'functions') {
            if(this.module1) {
                return this.module1;
            } else {
                this.module1 = require('./functions')();
                return this.module1;
            }
        }

        if(moduleName === 'class') { 
                this.module2 = require('./class')();
                return this.module2;
            }

        if(moduleName === 'objects') { 
                this.module3 = require('./class')();
                return this.module3;
        }
      

    }

}




// calling

var  myModuleType = moduleType.getModule('functions'); // it will return module related to functions





 //*********************************************************************************************

// C. Singleton Pattern
// Prevent from creating multiple instances for a class

var TaskRepo = (function() {
    var taskRepo;
    function createRepo(){
        var taskRepo = new Object("Task");
        return taskRepo;
    }

    return {
        getInstance: function () {
            if(taskRepo){
                taskRepo = createRepo();
            } 
            return taskRepo;
        }
    };
})();


var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if(repo1 === repo2){
    console.log("Same Object");
}


// Note: In node js, we can implement by just making export and executable function and by default node will
// take care of it 

module.export = myMethod(); // here we are not exporting myMethod instead we are doing myMethod()
// such that it can get added into caching of nodejs





 //*********************************************************************************************

// D. Decorator  Pattern
// modifying the object without mess

var Ta= function(name){
    this.name = name;

    complete = function(){
        console,log("Completing the task " + this.name);
    }
}


// creating another object

var urgentTa = new Ta("urgent Task");

// adding new properties

urgentTa.priority = 2;

// adding another method also
urgentTa.notify = function(){
    console.log("Notifying to the important people");

}

//  overriding the existing function

urgentTa.complete = function(){
    this.notify();
    this.Ta.complete.call(this);
}

urgentTa.complete();







// will create a new object which will more good to add many urgent task


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



var urgentTask = function(name, priority){
    Task.call(this, name); // setting via main object
    this.priority = priority;  // adding new property
}


// now we can not access prototype of Task as we did not create the object right
// hence we have to create the new object to get it

urgentTask.prototype = Object.create(Task.prototype);

// adding another function
urgentTask.prototype.notify = function(){
    console.log("Notifying to the important people");
}

// overriding save function
urgentTask.prototype.save = function() {
    this.notify();
    Task.prototype.save.call(this); // calling main function to save the task
}





 //*********************************************************************************************

// E. Facade  Pattern
// Used to provide a simplified interface to a complicated system
// Facade hides the chaos from us




var Task = function(name){
    this.name = name;
    this.completed = false; 
}

// module - which returns the object
var TaskService = function () {

    return {
        completeTask = function(task){
            task.completed = true;
            console.log('Completed task ' + task.name);
        },

        notify = function(task){
            console.log('Notifying about task ' + task.name);
        },

       save = function(task){
            console.log('Saving task ' + task.name);
        },
    }
}(); // making executed function


// generally we have to call this then will do like

var task1= new Task({
    name: 'Task 1',
    completed: false
});

// and then calling the methods via service // will remove this once we have Facade pattern implemented

TaskService.completeTask(task1);

if(task1.completed){
    TaskService.notify(task1);
    TaskService.save(task1);
}



// Instead of doing the above we can wrap all service call into one

var TaskServiceWrapper = function(){

  var completeAndNotifySave = function(task) {  
      TaskService.completeTask(task);

    if(task1.completed){
        TaskService.notify(task);
        TaskService.save(task);
    }
}

    return {
        completeAndNotifySave: completeAndNotifySave
    }
}(); // making executed function


TaskServiceWrapper.completeAndNotifySave(task1); // just calling this and it will do rest of the task


