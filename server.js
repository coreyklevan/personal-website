const express = require('express');
const path = require('path');

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the about page
app.get('/about', (req, res) => {
    res.render('about');
});

// route for the resume page
app.get('/resume', (req, res) => {
    res.render('resume');
});

// Start the server
const port = 1650;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});