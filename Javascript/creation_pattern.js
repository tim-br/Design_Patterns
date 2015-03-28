var newObject = Object.create(null);

newObject.someKey = 'Hello World';
var key = newObject.someKey;
// 2. Square bracket syntax
//newObject['someKey'] = 'Hello World'; // Write properties
//var key = newObject['someKey'];

Object.defineProperties(newObject, {
  "someKey": {
    value: "Hello World",
    writable: true
  },
  "anotherKey": {
    value: "Foo bar",
    writable: false
  }
});

Object.defineProperty(newObject, "someKey", {
  value: "for more control of the property's behavior",
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(newObject.someKey);


// If the above feels a little difficult to read, a short-hand could
// be written as follows:
var defineProp = function ( obj, key, value ){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty(obj, key, config);
}
var person = Object.create(null);


defineProp( person, 'car','Delorean' );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );

console.log(person);


// 4. Object.defineProperties

// Set properties
Object.defineProperties( newObject, {

  "someKey": {
    value: "Hello World",
    writable: true
  },

  "anotherKey": {
    value: "Foo bar",
    writable: false
  }

});

console.log(newObject.someKey);
/*defineProp( man, 'dob', '1981' );
defineProp( man, 'beard', false );

if(man.beard === false){
  console.log("man is clean shaven");
}*/

/*
3 ways to make an object
var newObject = {}; // or
var newObject = Object.create(null); // or
var newObject = new Object();
*/
