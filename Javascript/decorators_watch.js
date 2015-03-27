function Watch(){
  this.cost = function(){return 49;};
  this.screenSize = function() {return 7;};
}

function Engraving(watch){
  var v = watch.cost();
  watch.cost = function(){
    return v + 15;
  }
}

function Insurance(watch){
  var v = watch.cost();
  watch.cost = function(){
    return v + 5;
  }
}

var wat = new Watch();
Engraving(wat);
console.log(wat.cost());
Insurance(wat);
console.log(wat.cost());
