var move = document.querySelector("#move");
var userInfo = document.querySelector(".user-info");
var extendbar = document.querySelector("#extendbar");
var chatArea = document.querySelector(".chat-area");
var menu = document.querySelector("#menu");
var hiddenBar = document.querySelector(".hiddenbar");
var hiddenBar = document.querySelector(".hiddenbar");

move.addEventListener("click", () =>{
    userInfo.classList.toggle("show")
    chatArea.classList.toggle("expand")
})
extendbar.addEventListener("click", () =>{
    chatArea.classList.toggle("display")
    userInfo.classList.toggle("sub")
})
menu.addEventListener("click", () =>{
    hiddenBar.classList.add("appear")
})

document.onclick = function(e){
    if(e.target.class !== "hiddenbar" && e.target.id !== "menu"){
        hiddenBar.classList.remove("appear")
    }
}

const body = document.querySelector("body"),
      Switch = body.querySelector(".switch"),
      moonsun = body.querySelector("#moonSun"),
      lightDark = body.querySelector(".lightDark");

Switch.addEventListener("click", () =>{
    body.classList.toggle("dark")
    if (body.classList.contains("dark")) {
        moonsun.classList.replace("fa-moon", "fa-sun")
        lightDark.innerText = "light mode"
        
    } else {
        moonsun.classList.replace("fa-sun", "fa-moon")
        lightDark.innerText = "night mode"
    }
})