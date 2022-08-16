const hamburger = document.getElementById('hamburger');
const linksNavbar = document.getElementById('linksNavbar');

hamburger.addEventListener('click', (event) => {
    linksNavbar.classList.toggle('show');
    console.log(linksNavbar);
})