'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const Raul = new Person('Raul', 2002);

console.log(Raul);
console.log('hi');
