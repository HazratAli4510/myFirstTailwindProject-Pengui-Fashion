var menuButton = document.getElementById('menuButton')
var menu = document.getElementById('menu')
menu.style.top = "-250px"
menu.style.transition = "0.3s"
menuButton.onclick = function () {
    if (menu.style.top == "-250px") {
        menu.style.top = "55px"
    } else {
        menu.style.top = "-250px"
    }
}
