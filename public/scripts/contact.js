let body = document.body;
let html = document.documentElement;

// Compatability of calculating height of different browsers
let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
window.scrollTo(0, height);