const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page (also serves as the index)
app.get('/', (req, res) => {
    res.render('about');
});


// Route for the resume page
app.get('/resume', (req, res) => {
    res.render('resume');
});

// Define the port to listen on
const port = process.env.PORT || 1500;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});