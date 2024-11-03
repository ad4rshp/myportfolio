const lightModeBtn = document.getElementById("light-mode-btn");
const darkModeBtn = document.getElementById("dark-mode-btn");
const body = document.body;

lightModeBtn.addEventListener("click", () => {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    lightModeBtn.style.display = "none";
    darkModeBtn.style.display = "inline";
});

darkModeBtn.addEventListener("click", () => {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    darkModeBtn.style.display = "none";
    lightModeBtn.style.display = "inline";
});

const menuBtn = document.getElementById("menu-btn");
const menuNav = document.getElementById("menu-nav");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menuNav.classList.toggle("open");
});
document.addEventListener("click", (e) => {
    if (!menuNav.contains(e.target) && !menuBtn.contains(e.target)) {
        menuNav.classList.remove("open");
    }
});

