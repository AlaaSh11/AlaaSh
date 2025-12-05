const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Example route to get projects (we will implement the table later)
app.get('/api/projects', async (req, res) => {
    try {
        // const [rows] = await db.query('SELECT * FROM projects');
        // res.json(rows);
        res.json([
            { id: 1, title: 'CyberSecurity Tool', description: 'A network scanner tool.', tech: ['Python', 'Socket'] },
            { id: 2, title: 'Portfolio V1', description: 'My first portfolio.', tech: ['HTML', 'CSS'] }
        ]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
