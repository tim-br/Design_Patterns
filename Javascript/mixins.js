var Car = function(settings){
  this.model = settings.model || 'no model provided';
  this.color = settings.color || 'no color provided';
}

var Mixin = function(){};
Mixin.prototype ={
  driveForward: function(){
    console.log('drive forward');
  },
  driveBackward: function() {
    console.log('drive backward');
  },
  name: 'betty'
}

function augment(receivingClass, givingClass){
  for(var methodName in givingClass.prototype){
    if ( !receivingClass.prototype[methodName] ) {
      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
    }
  }
}


var vehicle = new Car({model:'ford'});
augment(Car, Mixin);
//vehicle now inherit all attributes of Mixin
//including functions and values


console.log(vehicle.color);
console.log(vehicle.name);
vehicle.driveForward();
