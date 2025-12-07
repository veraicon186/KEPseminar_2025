const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

document.addEventListener("click", (e) => {
  const isToggle = toggle.contains(e.target);
  const isNav = nav.contains(e.target);

  if (!isToggle && !isNav) {
    nav.classList.remove("active");
  }
});

toggle.addEventListener("click", (e) => {
  e.stopPropagation();   // zabrání zavření hned po kliknutí
  nav.classList.toggle("active");
});

nav.addEventListener("click", (e) => {
  e.stopPropagation();   // kliknutí uvnitř menu nezavře
});

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
