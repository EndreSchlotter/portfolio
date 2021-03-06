// Date in footer

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    const containerHeight = linksContainer.offsetHeight;
    const linksHeight = links.offsetHeight;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
});

/*************  fixed navbar and back to top button ****************/
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.offsetHeight;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})

// select links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const actualHref = e.currentTarget.getAttribute('href');
        const indexOfHashtag = actualHref.indexOf('#');
        const id = actualHref.substr(indexOfHashtag + 1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.offsetHeight;
        const containerHeight = linksContainer.offsetHeight;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }

        if (navHeight > 74) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position
        });
        linksContainer.style.height = 0;
    })
})