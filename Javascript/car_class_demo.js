function Car(model){
  this.model = model;
  this.color = 'silver';
  this.year = '2012';
  this.getInfo = function(){
    return this.model + ' ' + this.year;
  }
}

var myCar = new Car('ford');
myCar.year = '2010';
console.log(myCar.getInfo());

var myOtherCar = {
  model: "mustang",
  year: '1999',
  getInfo: function () {
    return this.model + ' ' + this.year;
  }
}

console.log(myOtherCar.getInfo());
//already in the instance, all of these are singletons

var myThirdCar = new function(){
  this.model = 'honda';
  this.color = 'silver';
  this.year = '1985';
  this.getInfo = function(){
    return this.model + ' ' + this.year;
  }
}

console.log(myThirdCar.getInfo());

// Each of the following options will create a new empty object:
var newObject = {};
var myNewObject = Object.create(null);
var myOtherNewObject = new Object();
