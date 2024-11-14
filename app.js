const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function handleLogin(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // You can add validation here if needed
}
