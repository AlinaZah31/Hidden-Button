const results = ["1", "2", "3"];
const random = Math.floor(Math.random() * results.length);

function displayMessage() {
    const idBtn = document.getElementById("btn").innerHTML;
    if (idBtn == "btn" + results[random]) {
        document.getElementById("Initial-text").innerHTML="You win!";
    } else {
        document.getElementById("Initial-text").innerHTML= "You lose!";
    }
}
