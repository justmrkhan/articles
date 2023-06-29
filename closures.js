"use strict";

/* Introduction Example */

let numOfReaders = 5;

const newReaderCount = () => {
  let numOfReaders = 0;

  return function () {
    numOfReaders++;
    console.log(numOfReaders);
  };
};

const readers = newReaderCount();
readers();

console.dir(readers);

/* Multiplier Example (Partial reference from Eloquent JS) */

function multiplier(factor) {
  return function (number) {
    console.log(number * factor);
  };
}

const twice = multiplier(2);
twice(5); // 10

/* Interview Question Snippet */

for (let i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);
  }, 1000);
}

/* Basic Usage Example */

const nameOfAuthor = "Afan Khan";

function accessGlobal() {
  console.log(nameOfAuthor);
}

accessGlobal();
