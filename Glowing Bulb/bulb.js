
let index = 1;

function glow() {
    let id = document.getElementById("bulb_pic");
    
    if (index >= 1 && index <= 4) {
        id.src = "bulbon" + index + ".png";
        index++;
    } else if (index == 5) {
        id.src = "bulboff.png";
        index = 1;
    }
}
