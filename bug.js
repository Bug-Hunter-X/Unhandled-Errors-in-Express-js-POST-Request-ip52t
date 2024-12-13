const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing crucial error handling here! 
  // What if req.body is malformed or missing? 
  // What if database insertion fails?
  console.log('Received user:', user); // Log for demonstration
  // Simulate database insertion - replace with your actual logic
  setTimeout(() => {
    res.status(201).json({ message: 'User created' });
  }, 1000); // Simulate delay
});
app.listen(3000, () => console.log('Server listening on port 3000'));