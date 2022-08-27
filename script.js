const hamburger = document.getElementById('hamburger');
const linksNavbar = document.getElementById('linksNavbar');

hamburger.addEventListener('click', (event) => {
    linksNavbar.classList.toggle('show');
    console.log(linksNavbar);
})

var typed = new Typed(".hero-text-unstatic", {
    strings: ["HISTÓRIA", "QUALIDADE", "TRADIÇÃO"],
    typeSpeed: 200,
    loop: true,
    backDelay: 900,
    backSpeed: 60,
});