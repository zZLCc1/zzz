const body = document.querySelector("body");
let heartCreationInterval; // Variable to store the interval ID
let heartRemovalInterval; // Variable to store the heart removal interval

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    body.appendChild(heart);
}

function removeExcessHearts() {
    const heartArr = document.querySelectorAll(".fa-heart");
    if (heartArr.length > 200) {
        heartArr[0].remove(); // Remove the first heart when there are more than 200 hearts
    }
}

document.getElementById("myText").addEventListener("click", function () {
    // If intervals are already running, stop them before starting new ones
    if (heartCreationInterval)
        clearInterval(heartCreationInterval);
    if (heartRemovalInterval)
        clearInterval(heartRemovalInterval);

    // Start creating hearts
    heartCreationInterval = setInterval(createHeart, 100);

    // Start removing excess hearts
    heartRemovalInterval = setInterval(removeExcessHearts, 100);
});

