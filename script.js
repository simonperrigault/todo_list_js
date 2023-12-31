let text = document.querySelector("input[type=\"text\"]");
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(text.value);
  text.value = "";
});
