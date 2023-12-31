let text = document.querySelector("input[type=\"text\"]");
let form = document.querySelector("form");
let liste = document.querySelector("ul");

let before = JSON.parse(localStorage.getItem("liste"));
if (before != null) {
  before.forEach((element) => {
    liste.innerHTML += `<li>${element}</li>`;
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  liste.innerHTML += `<li>${text.value}</li>`;
  let curr = JSON.parse(localStorage.getItem("liste"));
  if (curr == null) {
    curr = [];
  }
  curr.push(text.value);
  localStorage.setItem("liste", JSON.stringify(curr));
  text.value = "";
});
