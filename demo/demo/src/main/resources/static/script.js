
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("welcomeButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {
        message.textContent =
            "Thank you for visiting Mandaali Consultancies!";
    });
});
    