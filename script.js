const randomBtn = Math.floor(Math.random() * 3) + 1; // +1, because it will save the position from the array, meaning 0, 1 or 2

function displayMessage(buttonId) {
    if (buttonId == randomBtn) {
        document.getElementById("Initial-text").innerHTML="You win!";
    } else {
        document.getElementById("Initial-text").innerHTML= "You lose!";
    }
}
