import express from 'express';
import path from 'path';
const path = require('path');
const app = express();
const port = 1650; // Use the configured port for Docker

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page, renders the 'about' view
app.get('/', (_req, res) => {
    res.render('about');
});

// Route for the resume page, renders the 'resume' view
app.get('/resume', (_req, res) => {
    res.render('resume');
});

// Start the server and log any potential errors
app.listen(port, (err) => {
    if (err) {
        console.error('Error starting server:', err);
        return;
    }
    console.log(`Server is running on port ${port}`);
});