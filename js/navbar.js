var menuBtn = document.getElementById("menu-btn");
var navigation = document.getElementById("navigation");


const toggleMenu = ()=>{
    navigation.classList.toggle("active")
}

menuBtn.addEventListener("click",toggleMenu)