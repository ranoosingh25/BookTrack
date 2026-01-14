function login(role) {
  localStorage.setItem("role", role);
  window.location.href = "books.html";
}

function logout() {
  localStorage.removeItem("role");
  window.location.href = "index.html";
}
