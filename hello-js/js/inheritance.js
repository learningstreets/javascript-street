


var task = {
    title : "This is title"
}

Object.defineProperty(task, 'showMe', {
    value : function() {
        return this.title;
    },

    writable:false, // now we can not change it , try changing you will not get changed value
    enumerable:false, // we are hiding it  
    configurable:false // we can not configure further

})
 

console.log(task.showMe()) // "This is title"



// Inheritance 

// inheriting task object and creating urgentTask object
var urgentTask = Object.create(task);


Object.defineProperty(urgentTask, 'showMe', {
    value : function() {
        return this.title + ' and it is very urgent task';
    },

    writable:false,  
    enumerable:false,  
    configurable:false 

})

console.log(urgentTask.showMe()) // "This is title and it is very urgent task

// Even though task.showMe was not writable but with the inheritance we are able to do so