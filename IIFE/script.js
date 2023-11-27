"use strict";

// Function Declaration

(function () {
  const password = `uVkJa@^FmAHG7QW$(B+j`;
  console.log(`User's social media password: ${password}`);
})();

// Function Expression

(() => {
  console.log(`This is the functional expression version of an IIFE`);
})();

// Function Expression

(async () => {
  await fetch("https://api.quotable.io/quotes/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(`Random Quote (Only Once): ${data[0].content}`);
    });
})();
