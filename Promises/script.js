"use strict";

/*

console.log(fetch("https://icanhazdadjoke.com/"));

// 

const randomQuote = async function () {
  try {
    await fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(`${data.author}: ${data.content}`);
      });
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

randomQuote();

let flag = false;

const customPromise = function () {
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve("Hey, this is resolved");
    } else {
      reject("Hey, your request got rejected");
    }
  });
};

const ourFunction = async function () {
  flag = true;
  const result = await customPromise();

  console.log(result);
};

ourFunction();

//

const fetchInformation = async function () {
  await fetch(`https://jsonplaceholder.typicode.com/posts/2`)
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(`Title: ${data.title} \n Body: ${data.body}`));
};

fetchInformation();

//

const secretVal = 5;

const thenEx = new Promise((resolve, reject) => {
  if (secretVal === 5) {
    resolve("Resolved");
  } else {
    reject("Rejected");
  }
});

const success = (value) => {
  console.log(value);
};

const failure = (value) => {
  console.error(value);
};

thenEx.then(success, failure);

//

const chainExample = async function () {
  await fetch("https://jsonplaceholder.typicode.com/todos/5")
    .then((res) => {
      return res.json();
    })
    .then(async (data) => {
      console.log(data);

      return fetch("https://jsonplaceholder.typicode.com/todos/6");
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      return fetch("https://jsonplaceholder.typicode.com/todos/7");
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

chainExample();

const customPromise = function () {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({
          name: "Afan Khan",
          publication: "JavaScript in Plain English",
          article: "What is a Promise and Async/Await",
        });
      }, 1500);
    } catch (e) {
      reject("Hey, your request got rejected");
    }
  });
};

const ourFunction = async function () {
  await customPromise().then((data) =>
    console.log(`Name: ${data.name} & Article: ${data.article}`)
  );
};

ourFunction();

const promiseExample = new Promise((resolve, reject) => {
  try {
    resolve({
      name: "Afan Khan",
      age: "17",
    });
  } catch (e) {
    reject("Test Rejected");
  }
});

promiseExample
  .then((data) => {
    return data;
  })
  .then(({ name, age }) => {
    console.log(name, age);
  });

  const promiseExample = new Promise((resolve, reject) => {
  try {
    resolve({
      status: "Test Confirmed",
      name: "Afan Khan",
    });
  } catch (e) {
    reject("Test Rejected");
  }
});

promiseExample.then((data) => console.log(data.status)); // "Text Confirmed"

// 

// Function Definition

const todosEx = async function () {
  await fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// Real Testing

const test = async () => {
  console.log(1);
  await todosEx();
  console.log(2);
};

test();

*/
