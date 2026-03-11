function toggleDarkMode() {
  document.body.classList.toggle("w3-black");

  const enabled = document.body.classList.contains("w3-black");
  localStorage.setItem("darkMode", enabled);
}

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("w3-black");
}