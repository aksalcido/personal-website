/* Navbar */
const navbar = document.getElementsByTagName("nav")[0];
const navbarListItems = document.querySelectorAll("#navbar-list a")

/* Contact Tab */
const contactTab = document.getElementById("nav-contact");

/* Welcome Page Navigate Down Arrow */
const navigateDownIcon = document.getElementById("navigate-down-icon")

const aboutMeSection = document.getElementById("about-section");

/* Project Showcase */
const projectContainers = document.querySelectorAll(".project-showcase");

/* Images */
const brushImg = document.getElementById("brush-img");
const pacmanImg = document.getElementById("pacman-img");
const sudokuImg = document.getElementById("sudoku-img");

/* Email Icon */
const emailIcon = document.getElementById("email-icon");

const navbarPadding = 75;


window.onscroll = function() {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    /* Navbar */
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

navigateDownIcon.addEventListener("click", () => {
    window.scrollTo(0, aboutMeSection.offsetHeight + aboutMeSection.scrollHeight - navbarPadding);
});


emailIcon.addEventListener("click", () => {
    /* Get the text field */
    let tempInput = document.createElement('input');
    tempInput.value = "armandosalcido024@gmail.com";
    
    document.body.appendChild(tempInput);

    /* Select the text field */
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */
    
    /* Copy the text inside the text field */
    document.execCommand("copy");
    
    tempInput.remove();

    /* Alert the copied text */
    alert("Copied Email");
});










// Blur not utilized in project anymore
function unblurTransition(container, scrollTop) {
    if (scrollTop + window.innerHeight >= container.offsetTop + (container.offsetHeight * 0.89)) {
        container.classList.remove('blurred-demo');
    } else {
        container.classList.add('blurred-demo');
    }
}
