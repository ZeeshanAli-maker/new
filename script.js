// Wait for the DOM content to load before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Get the button by its ID
    const alertButton = document.getElementById("alertButton");

    // Add an event listener to the button
    alertButton.addEventListener("click", function() {
        alert("Hello! This is a simple alert message.");
    });
});
