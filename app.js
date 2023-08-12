const express = require('express');
const fs = require('fs/promises'); // Import the built-in promises version of the 'fs' module

const app = express();
const PORT = 3000; // Change this to your desired port

app.use(express.json()); // Middleware to parse JSON in requests

app.post('/login', async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;

    const user = { emailOrPhone, password };
    const userData = JSON.stringify(user);

    // Append the user data to the JSON file
    await fs.appendFile('data.json', userData + '\n', 'utf-8');
    
    res.status(200).send('User data saved successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




