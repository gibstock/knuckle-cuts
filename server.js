// Load Node Modules
const express = require('express');
const ejs = require('ejs');

// Initialize Express
const app = express();

// Port number
const port = 3000;

// Render static files, css, js, images
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

// Set view engine to ejs
app.set('view engine', 'ejs');


// localhost port
app.listen(port, ()=> {
    console.log(`App is listening at http://localhost:${port}`)
})

//GET Routes - display pages
//Root Route

app.get('/blog/:id', (req, res) => {
    let pageTitle = req.params.id.replace(/-/g, " " )
    res.render(('pages/'+req.params.id), {
        pageTitle: pageTitle
    })
})

app.get('/', (req, res) => {
    let pageTitle = "Home";
    res.render('pages/index', {
        pageTitle: pageTitle
    });
})

app.get('/contact', (req, res) => {
    let pageTitle = "Contact"
    res.render('pages/contact', {
        pageTitle: pageTitle
    });
})
app.get('/projects', (req, res) => {
    let pageTitle = "Projects"
    res.render('pages/projects', {
        pageTitle: pageTitle
    });
})

