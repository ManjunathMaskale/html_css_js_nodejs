const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;


// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Login endpoint
app.post('/login', (req, res) => {
    // Dummy authentication logic (replace with your own)
    const { username, password } = req.body;
    if (username === 'user' && password === 'password') {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

// Register endpoint
app.post('/register', (req, res) => {
    // Dummy registration logic (replace with your own)
    const { username, password } = req.body;
    // Perform registration logic here
    res.json({ success: true, message: 'Registration successful' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
