// TRAVERSING THE DOM //

let itemList = document.querySelector("#items");
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "lightgrey";
// div ka color grey ho jayga, jo ki itemList ka parent hai

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "lightgrey";

// childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// firstChild
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// // last Child
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// create a div
let newDiv = document.createElement("div");

// Add class
newDiv.className = "Hello";

//Add id
newDiv.id = "hello1";

newDiv.setAttribute("title", "Hello Div");

//create text node
let newDivText = document.createTextNode("Hello world");
// add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

console.log(newDiv);

container.insertBefore(newDiv, h1);
