let text = document.querySelector("input[type=\"text\"]");
let form = document.querySelector("form");
let liste = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  liste.innerHTML += `<li>${text.value}</li>`;
  text.value = "";
});
