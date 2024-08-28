document.addEventListener('DOMContentLoaded', function () {
    const signupOption = document.querySelector('.options ul li:nth-child(1)');
    const signupModal = document.getElementById('signup-modal');
    const closeModal = document.getElementById('close-modal');
    const signupForm = document.getElementById('signup-form');

    // Show the signup modal when the "Signup" option is clicked
    signupOption.addEventListener('click', function () {
        signupModal.style.display = 'block';
    });

    // Hide the signup modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        signupModal.style.display = 'none';
    });

    // Submit the form and redirect to the display page
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        const email = document.getElementById('email').value;

        // Store the data in localStorage (or you could send it to a server)
        localStorage.setItem('name', name);
        localStorage.setItem('contact', contact);
        localStorage.setItem('email', email);

        // Redirect to the display page
        window.location.href = "display.html";
    });
});
