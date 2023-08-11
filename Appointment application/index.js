document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get user details from form
  let name = document.getElementById("userName").value;
  let email = document.getElementById("userEmail").value;
  let phone = document.getElementById("userPhone").value;

  // Create user object
  let user = {
    name: name,
    email: email,
    phone: phone,
  };

  // Save to localStorage
  localStorage.setItem(`${email}`, JSON.stringify(user));

  // Display the
  let userList = document.getElementById("userList");
  let li = document.createElement("li");
  li.innerHTML = `<strong>Name:</strong> ${user.name}, 
        <strong>Email:</strong> ${user.email}, 
        <strong>Phone:</strong> ${user.phone}
  `;
  // delete button
  let delButton = document.createElement("button");
  delButton.className = "deleteButton";
  delButton.appendChild(document.createTextNode("Delete"));
  li.appendChild(delButton);
  userList.appendChild(li);

  //   edit button
  let editButton = document.createElement("button");
  editButton.className = "editButton";
  editButton.appendChild(document.createTextNode("Edit"));
  li.appendChild(editButton);
  userList.appendChild(li);

  //deleting
  delButton.addEventListener("click", (e) => {
    localStorage.removeItem(`${email}`);
    userList.removeChild(li);
  });

  // Doing editing
  editButton.addEventListener("click", (e) => {
    // Retrieve user details from localStorage
    let storedUser = JSON.parse(localStorage.getItem(`${email}`));

    // Populate the form fields for editing
    document.getElementById("userName").value = storedUser.name;
    document.getElementById("userEmail").value = storedUser.email;
    document.getElementById("userPhone").value = storedUser.phone;

    // Remove user from localStorage and list
    localStorage.removeItem(`${email}`);
    // userList.removeChild(li);
  });
});
