const results = ["1", "2", "3"];
const randomPos = Math.floor(Math.random() * results.length);
const randomBtn = results[randomPos];
const first = document.getElementById("btn1").innerHTML;
const second = document.getElementById("btn2").innerHTML;
const third = document.getElementById("btn3").innerHTML;

function displayMessage(buttonId, randomBtn) {
    if (buttonId == "Button " + randomBtn) {
        document.getElementById("Initial-text").innerHTML="You win!";
    } else {
        document.getElementById("Initial-text").innerHTML= "You lose!";
    }
}
