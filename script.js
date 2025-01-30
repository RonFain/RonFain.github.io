document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            if (link.getAttribute('href').includes('sign-in.html')) {
                alert('You are being redirected to the Sign In page!');
            }
        });
    });
});
