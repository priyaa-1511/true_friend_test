let score = Number(localStorage.getItem("score"));

document.getElementById("score").innerHTML = score + "%";

let message = "";

if (score >= 90) {
    message = "❤️ Best Friends Forever!";
} else if (score >= 70) {
    message = "😊 Great Friends!";
} else if (score >= 50) {
    message = "🙂 Good Friends!";
} else {
    message = "🤝 Spend more time together!";
}

document.getElementById("message").innerHTML = message;
