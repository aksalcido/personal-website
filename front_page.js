const navbar = document.getElementsByTagName("nav")[0];
const navbarListItems = document.querySelectorAll(".navbar-item a")

let atTopOfPage = true;

window.onscroll = function() {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        atTopOfPage = true;
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