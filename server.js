// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const openai = require('openai'); // Or use axios for direct API requests

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to interact with OpenAI API
app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;  // Get the user prompt from the request

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required.' });
  }

  try {
    // Make a request to OpenAI API
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003', // Or use "gpt-3.5-turbo" if using GPT-3.5
      prompt: prompt,
      max_tokens: 100,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // API key from the .env file
      }
    });

    // Send the response to the frontend
    res.json({ result: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error interacting with OpenAI:', error);
    res.status(500).json({ error: 'Error with OpenAI API request.' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

