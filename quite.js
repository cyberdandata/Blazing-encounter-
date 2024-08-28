document.addEventListener('DOMContentLoaded', function () {
    const quitOption = document.querySelector('.options ul li:nth-child(2)');

    // Add a click event listener to the "Quit" option
    quitOption.addEventListener('click', function () {
        // Redirect to Google's homepage
        window.location.href = "https:m.youtube.com/@TheRadiatesUccMukono";
    });
});
