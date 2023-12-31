let text = document.querySelector("input[type=\"text\"]");
let form = document.querySelector("form");
let liste = document.querySelector("ul");
let reset = document.getElementById("reset");

let curr = JSON.parse(localStorage.getItem("liste"));
if (curr != null) {
  curr.forEach((element) => {
    liste.innerHTML += `<li>${element}</li>`;
  });
}
else {
  curr = [];
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  liste.innerHTML += `<li>${text.value}</li>`;
  curr.push(text.value);
  localStorage.setItem("liste", JSON.stringify(curr));
  text.value = "";
});

reset.addEventListener("click", () => {
  localStorage.setItem("liste", JSON.stringify([]));
  curr = [];
  liste.innerHTML = "";
});

document.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    let name = event.target.innerHTML;
    curr.splice(curr.indexOf(name), 1);
    liste.removeChild(event.target);
    localStorage.setItem("liste", JSON.stringify(curr));
  }
});