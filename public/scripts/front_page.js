const navbar = document.getElementsByTagName("nav")[0];
const navbarListItems = document.querySelectorAll(".navbar-item a")

const contactTab = document.getElementById("nav-contact");

window.onscroll = function() {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        navbar.style.background = 'transparent'

        navbarListItems.forEach(navItem => {
            navItem.style.color = 'white';
        });

    } else {
        navbar.style.background = 'white';
        
        navbarListItems.forEach(navItem => {
            navItem.style.color = 'black';
        });
    }
};

contactTab.addEventListener("click", () => {
    let body = document.body;
    let html = document.documentElement;

    // Compatability of calculating height of different browsers
    let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    window.scrollTo(0, height);
});