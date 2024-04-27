const sidebar = document.querySelector("aside");
const maxSidebar = document.querySelector(".max")
const miniSidebar = document.querySelector(".mini")
const roundout = document.querySelector(".roundout");
const grow = document.querySelector(".grow");
const toolbar = document.querySelector(".toolbar");
const dark = document.querySelector(".dark");
const sun = document.querySelector(".sun");

function openNav() {
  sidebar.style.width = "240px";
  maxSidebar.classList.remove("hidden");
  miniSidebar.classList.add("hidden");
}

function closeNav() {
  sidebar.style.width = "0";
  maxSidebar.classList.add("hidden");
  miniSidebar.classList.remove("hidden");
}

function setDark(type) {
  if (type === 'dark') {
    dark.classList.add("hidden");
    sun.classList.remove("hidden");
    toolbar.classList.add("dark");
    grow.classList.add("dark");
    roundout.classList.add("dark");
  } else {
    sun.classList.add("hidden");
    dark.classList.remove("hidden");
    toolbar.classList.remove("dark");
    grow.classList.remove("dark");
    roundout.classList.remove("dark");
  }
}
// Sidebar JavaScript
const sidebar = document.querySelector(".sidebar");

function openSidebar() {
    sidebar.style.display = "block";
}

function closeSidebar() {
    sidebar.style.display = "none";
}
