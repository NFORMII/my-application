const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to sign up user and store in SQLite database
app.post('/signup', (req, res) => {
    const { name, relationshipStatus } = req.body;

    // Insert the user into the database
    const query = `INSERT INTO users (name, relationship_status) VALUES (?, ?)`;
    db.run(query, [name, relationshipStatus], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Error saving user', error: err });
        }
        // Send back the user ID after insertion
        res.status(200).json({ message: 'User signed up successfully!', userId: this.lastID });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

