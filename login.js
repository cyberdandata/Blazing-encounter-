
// Store usernames and passwords in an object
const users = {
  "admin": "password123",
  "user1": "hello123",
  "user2": "world123"
};

// Get the sign in form elements
const sign-in-Form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("passcode");
const signInButton = document.getElementById("submit");

// Add an event listener to the sign in button
signInButton.addEventListener("click", (e) => {
  e.preventDefault();

  // Get the entered username and password
  const enteredUsername = usernameInput.value;
  const enteredPasscode = passcodeInput.value;

  // Check if the username and password match
  if (users[enteredUsername] === enteredPasscode) {
    // If the credentials are correct, redirect to the next page
    window.location.href = "next-page.html";
  } else {
    // If the credentials are incorrect, display an error message
    alert("Invalid username or password");
  }
});
