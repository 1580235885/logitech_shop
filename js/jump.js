var goShop = document.getElementById("goShop");
var mine = document.getElementById("mine");
goShop.addEventListener("tap",function() {
    if(localStorage.getItem("userStatus")) {
        window.location = "./shop-car.html";
    }else {
        window.location = "login.html";
    }
})
mine.addEventListener("tap",function() {
    if(localStorage.getItem("userStatus")) {
        window.location = "./mine.html";
    }else {
        window.location = "login.html";
    }
})