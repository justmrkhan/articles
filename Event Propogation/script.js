"use strict";

// Old Approach

/* 
const pTag = document.querySelectorAll(".main-p");

pTag.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("p-color-change");
  });
});

*/

// New Approach

const section = document.querySelector(".main");

section.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("main-p")) {
    target.classList.toggle("p-color-change");
  }
});
