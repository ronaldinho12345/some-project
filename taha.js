var menuicon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var container = document.querySelector(".container")
menuicon.onclick = function() {
    sidebar.classList.toogle("small-sidebar")
    container.classList.toogle("large-container")
}