// const input1 = document.getElementById("inputOne");
// const input2 = document.getElementById("inputTwo");
// const additionBtn = document.getElementById("addition");
// const subtractionBtn = document.getElementById("subtraction");
// const multiplicationBtn = document.getElementById("multiplication");
// const divisionBtn = document.getElementById("division");
// const output = document.getElementById("output");

// 1. Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice. Your time starts now.

// function addInputs() {
//   const result = Number(input1.value) + Number(input2.value);
//   output.innerText = result;
// }

// additionBtn.addEventListener("click", addInputs);

// function subtractInputs() {
//   const result = Number(input1.value) - Number(input2.value);
//   output.innerText = result;
// }

// subtractionBtn.addEventListener("click", subtractInputs);

// function multiplyInputs() {
//   const result = Number(input1.value) * Number(input2.value);
//   output.innerText = result;
// }

// multiplicationBtn.addEventListener("click", multiplyInputs);

// function divideInputs() {
//   const result = Number(input1.value) / Number(input2.value);
//   output.innerText = result;
// }

// divisionBtn.addEventListener("click", divideInputs);

// SIQ 2 ends

// -------------------------------------------------------------------
// Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.

// const theText = document.getElementById("text");

// const increaseBtn = document.getElementById("increase");

// const decreaseBtn = document.getElementById("decrease");

// let number = 16;

// function increaseText() {
//   number = number + 2;
//   theText.style.fontSize = `${number}px`;
// }

// increaseBtn.addEventListener("click", increaseText);

// function decreaseText() {
//   number = number - 2;
//   theText.style.fontSize = `${number}px`;
// }

// decreaseBtn.addEventListener("click", decreaseText);

//SIQ 3 ends

//---------------------------------------------------------------------------------

// Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

// const inputTxt = document.getElementById("inputText");
// const h1Btn = document.getElementById("header1");
// const h2Btn = document.getElementById("header2");
// const h3Btn = document.getElementById("header3");

// function changeToH1() {
//   inputTxt.outerHTML = "<H1>" + inputTxt.innerHTML + "</H1>";
// }

// h1Btn.addEventListener("click", changeToH1);

// function changeToH2() {
//   inputTxt.outerHTML = "<H2>" + inputTxt.innerHTML + "</H2>";
// }

// h2Btn.addEventListener("click", changeToH2);

// function changeToH3() {
//   inputTxt.outerHTML = "<H3>" + inputTxt.innerHTML + "</H3>";
// }

// h3Btn.addEventListener("click", changeToH3);

//SIQ4 ends

//---------------------------------------------------------------------------------

// Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.

// const inputText = document.getElementById("text");

// const redBtn = document.getElementById("red");
// const greenBtn = document.getElementById("green");
// const blueBtn = document.getElementById("blue");

// function changeRed() {
//   inputText.style.color = "red";
// }

// redBtn.addEventListener("click", changeRed);

// function changeGreen() {
//   inputText.style.color = "green";
// }

// greenBtn.addEventListener("click", changeGreen);

// function changeBlue() {
//   inputText.style.color = "blue";
// }

// blueBtn.addEventListener("click", changeBlue);

//SIQ5 ends

//---------------------------------------------------------------------------------
// Create a web app with a button loded. Show a text loading... on a web app. However, hide it if I click on the button loaded.

// const text = document.getElementById("txt");
// const button = document.getElementById("btn");

// button.addEventListener("click", removeText);

// function removeText() {
//   text.style.display = "none";
// }

// -------------------------------------------------------------------------------------

// Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.

// let url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// function callAPI(text) {
//   fetch(url + text)
//     .then((response) => {
//       console.log(response);
//       console.log(response.status);
//       return response.json();
//     })
//     .then((data) => console.log(data));
// }

// callAPI("?text=I am Shaktiman");
// ------------------------------------------------------------------------------------

// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.

// let obj1 = {
//   name: "Ram",
//   age: 31,
//   yuga: "Treta",
// };

// let obj2 = {
//   name: "Krishna",
//   age: 25,
//   yuga: "Dwapar",
// };

// function ageChecker(a, b) {
//   if (a.age > b.age) {
//     console.log(a.name);
//   } else {
//     console.log(b.name);
//   }
// }
// ageChecker(obj1, obj2);

// Create a CLI app which would detect fake news. This app will take news as input and then source.

// If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

let fakeSourceList = [
  "fb",
  "facebook",
  "whatsapp",
  "telegram",
  "insta",
  "instagram",
];

let news = prompt("News item?");
let source = prompt("Source?");

let isSourceFake = fakeSourceList.includes(source.toLowerCase());

let realNewsMessage = `${news} is real`;
let fakeNewsMessage = `${news} is fake news from ${source}`;

let analysis = isSourceFake ? fakeNewsMessage : realNewsMessage;

alert(analysis);
