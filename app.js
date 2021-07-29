const express = require('express');
const app = express();

// App checks for "ejs" files in the view so we don't have to manually type '.ejs'
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("front_page");
});

app.listen(3000, () => {
    console.log('Listening on PORT 3000');
})