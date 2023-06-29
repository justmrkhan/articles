"use strict";

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

for (let i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);
  }, 1000);
}

const nameOfAuthor = "Afan Khan";

function accessGlobal() {
  console.log(nameOfAuthor);
}

accessGlobal();
