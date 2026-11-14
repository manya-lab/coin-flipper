
function flipCoin() {

    let coin = document.getElementById("coin");
    let result = document.getElementById("result");
    let message = document.getElementById("message");
    let button = document.getElementById("flipBtn");

    // Generate a random number
    let randomNumber = Math.random();

    // Disable button during animation
    button.disabled = true;

    // Restart animation
    coin.classList.remove("flipping");
    void coin.offsetWidth;
    coin.classList.add("flipping");

    result.innerText = "Flipping...";
    message.innerText = "Wait for the result!";

    setTimeout(function() {

        if (randomNumber < 0.5) {

            coin.style.transform = "rotateY(0deg)";
            result.innerText = "Result: HEADS!";
            message.innerText = "Congratulations! You got Heads.";

        } else {

            coin.style.transform = "rotateY(180deg)";
            result.innerText = "Result: TAILS!";
            message.innerText = "Great! You got Tails.";

        }

        // Enable button again
        button.disabled = false;

    }, 1500);
}
