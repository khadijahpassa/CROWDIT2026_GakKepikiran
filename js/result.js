const finalScore = 85;

const scoreEl =
    document.getElementById("score");

let currentScore = 0;

const counter =
    setInterval(() => {

        currentScore++;

        scoreEl.textContent =
            currentScore;

        if (
            currentScore >= finalScore
        ) {
            clearInterval(counter);
        }

    }, 18);

const bars =
    document.querySelectorAll(
        ".progress-bar"
    );

bars.forEach((bar, index) => {

    setTimeout(() => {

        bar.style.width =
            bar.dataset.value + "%";

    }, index * 500);

});

const totalAnimationTime =
    bars.length * 500 + 1800;

setTimeout(() => {

    confetti({
        particleCount: 150,
        spread: 120,
        origin: {
            y: 0.7
        }
    });

    setTimeout(() => {

        confetti({
            particleCount: 120,
            angle: 60,
            spread: 90,
            origin: {
                x: 0
            }
        });

        confetti({
            particleCount: 120,
            angle: 120,
            spread: 90,
            origin: {
                x: 1
            }
        });

    }, 300);

}, totalAnimationTime);

function goToReview() {
    window.location.href =
        "review.html";
}