function showAlert(event) {
  if (event.target.value == "red") {
    alert("❤️");
  }
  if (event.target.value == "yellow") {
    alert("💛");
  }
  if (event.target.value == "blue") {
    alert("💙");
  }
}

let colorsSelect = document.querySelector("#colors");
colorsSelect.addEventListener("change", showAlert);
