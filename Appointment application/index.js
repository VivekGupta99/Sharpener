document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let phone = document.getElementById("userPhone").value;

    let newUser = {
      name: name,
      email: email,
      phone: phone,
    };

    // Retrieve existing users from localStorage
    let existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Add the new user to the existing users array
    existingUsers.push(newUser);

    // Save the updated array of users to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    displayUsers();
  });

function displayUsers() {
  let userList = document.getElementById("userList");
  userList.innerHTML = "";

  // Retrieve and display users from localStorage
  let savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  savedUsers.forEach((user) => {
    let userItem = document.createElement("li");
    userItem.innerHTML = `
            <strong>Name:</strong> ${user.name}, 
            <strong>Email:</strong> ${user.email}, 
            <strong>Phone:</strong> ${user.phone}
        `;
    userList.appendChild(userItem);
  });
}

// Display existing users on page load
window.onload = displayUsers;
