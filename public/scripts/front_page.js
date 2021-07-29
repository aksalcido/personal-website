const navbar = document.getElementsByTagName("nav")[0];
const navbarListItems = document.querySelectorAll(".navbar-item a")


const contactTab = document.getElementById("nav-contact");
const emailIcon = document.getElementById("email-icon");

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