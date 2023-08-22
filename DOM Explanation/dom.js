"use strict";

// querySelector() method.

const studentAchievement = document.querySelector(".student-achievements");
// console.log(studentAchievement);
studentAchievement.textContent = "A+ Grade in HTML & CSS";

// nodeType Property

const studentName = document.querySelector(".student-name");
console.log(studentName.nodeType); // Output: 1

// querySelectorAll()

const studentNames = document.querySelectorAll(".student-name");
console.log(studentNames);

// Approach 1

console.log(studentNames[2].textContent);

// Approach 2 - Log to the Console

studentNames.forEach((student) => {
  if (student.innerText === "Liam Johnson") {
    console.log(student.textContent);
  }
});

// Approach 2 - Display on the website

studentNames.forEach((student) => {
  if (student.innerText !== "Liam Johnson") {
    student.classList.toggle("hidden");
  }
});

// Toggle Icon

const switchIconImg = document.querySelector(".switch-icon");
console.log(switchIconImg);

switchIconImg.addEventListener("click", (e) => {
  if (e.target.getAttribute("src") === "toggle-off.png") {
    e.target.src = "toggle-on.png";
    studentAchievement.textContent = "A+ Grade in HTML & CSS";
  } else {
    e.target.src = "toggle-off.png";
    studentAchievement.textContent = "None";
  }
});
