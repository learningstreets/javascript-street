// Creating task 

var Task = function(data){
    this.name = data.name;
    this.user = data.user; 
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







// creating various services

var notificationService = function(){
    var message = 'Notifying ';
    this.update = function(task){
        console.log(message + task.user + ' for task ' + task.name);
    }
};

var loggingService = function(){
    var message = 'Logging ';
    this.update = function(task){
        console.log(message + task.user + ' for task ' + task.name);
    }
};

var auditingService = function(){
    var message = 'Auditing ';
    this.update = function(task){
        console.log(message + task.user + ' for task ' + task.name);
    }
};


// creating observer

function ObserverList(){
    this.ObserverList = [];
}

// adding  functions to the observer

ObserverList.prototype.add = function(obj){
    return this.ObserverList.push(obj);
};


ObserverList.prototype.get = function(index){
    if(index > -1 && index < this.ObserverList.length) {
        return this.ObserverList[index];
    }
};



// 

var ObservableTask = function(data){
    Task.call(this, data);
    this.observers = new ObserverList(); 
}


ObservableTask.prototype.addObserver = function(observer){
  this.observer.add(observer);
};

ObservableTask.prototype.removeObserver = function(observer){
    this.ObserverList.splice(index, 1);
  };

ObservableTask.prototype.notify = function(context){
   var observeCount = this.observers.count();

   for (let i = 0; i < observerCount; i++) {
      this.observers.get(i)(context)  ;
   }
  };


  ObservableTask.prototype.notify = function(){
    Task.prototype.save.call(this);
   };
  




var task1 = new Task({name: 'create a demo for constructor', user: 'Jon'});

var notification = new notificationService();
var logging = new loggingService();
var auditing = new auditingService();


task1.addObserver(notification.update);
task1.addObserver(logging.update);
task1.addObserver(auditing.update);

task1.save();

