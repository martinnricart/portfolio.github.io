document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");

  document.getElementById("trancision").style.display = "none";
  content.classList.add("show");
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav-menu').classList.toggle('active');
});
