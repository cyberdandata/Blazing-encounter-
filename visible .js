document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelector('.options');
    const toggleButton = options.querySelector('span');
    const menu = options.querySelector('ul');

    // Toggle the display of the options menu on click
    toggleButton.addEventListener('click', function () {
        if (menu.style.display === 'block' || menu.style.display === '') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
});
