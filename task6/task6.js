let form = document.getElementById("addForm");

let itemList = document.getElementById("items");

let filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItems);
// Delete event
itemList.addEventListener("click", removeItems);
// filter event
filter.addEventListener("keyup", filterItems);

// add Item
function addItems(e) {
  e.preventDefault();

  // get input value
  let newItem = document.getElementById("item").value;

  // create new li elements
  let li = document.createElement("li");
  //add class to li
  li.className = "list-group-item";

  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // create del button element
  let delButton = document.createElement("button");
  delButton.className = "btn btn-danger btn-sm float-right delete"; // adding className to the button
  // append textnode containing the letter "X".
  delButton.appendChild(document.createTextNode("X"));

  li.appendChild(delButton);
  itemList.appendChild(li);
}

// function to remove items
function removeItems(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  //convert text to lower case
  let text = e.target.value.toLowerCase();
  // Get li's
  var items = itemList.getElementsByTagName("li");
  // convert to an array
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
