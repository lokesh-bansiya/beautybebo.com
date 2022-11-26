const hamburger = document.querySelector(".hamburgersec");
const navManu = document.querySelector(".nav-menusec");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navManu.classList.toggle("active");
});

document.querySelectorAll(".nav-linksec").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navManu.classList.remove("active");
}));