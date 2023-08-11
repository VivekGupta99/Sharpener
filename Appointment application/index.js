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

  let delButton = document.createElement("button");
  delButton.className = "deleteButton";
  delButton.appendChild(document.createTextNode("Delete"));
  li.appendChild(delButton);
  userList.appendChild(li);

  //deleting
  delButton.addEventListener("click", (e) => {
    localStorage.removeItem(`${email}`);
    userList.removeChild(li);
  });
});
