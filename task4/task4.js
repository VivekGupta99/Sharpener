// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype);

// console.log(document.all);

// var headerTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");

// headerTitle.innerText = "Hello";
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = "<h3>Hello</h3>";
// console.log(headerTitle);

// header.style.borderBottom = "solid 5px black";

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[2]);

// items[2].style.fontWeight = "bold";
// // items[1].style.backgroundColor = "pink";
// items[2].style.backgroundColor = "yellow";

let input = document.querySelector("input");
// by default first ko utha leta hai
input.value = "Hello world";

let submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

let item = document.querySelector(".list-group-item");
item.style.color = "red";

// let lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "green";

let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.display = "none";
// thirdItem.style.visibility = "hidden";
thirdItem.hidden = true;
