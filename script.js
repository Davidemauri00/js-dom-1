const buttonEl = document.getElementById("buttonLamp");
const lampEl = document.getElementById("lamp");

buttonEl.addEventListener("click", function(){
    if(lampEl.alt.includes("lampadina spenta")){
        lampEl.src = "./img/yellow_lamp.png";
        lampEl.alt = "lampadina accesa";
    }
    else{
        lampEl.src = "./img/white_lamp.png";
        lampEl.alt = "lampadina spenta";
    }
});