const express = require('express');
const app = express();
app.use(express.json({error:(err,req,res,next)=>{res.status(400).json({error:err.message})}}));
app.post('/users', (req, res) => {
  try{
    const user = req.body;
    if (!user || !user.name || !user.email) {
      return res.status(400).json({ error: 'Missing user details' });
    }
    // Simulate database insertion with error handling
    setTimeout(() => {
      // Simulate a potential database error
      const databaseError = false; // Change to true to simulate error
      if (databaseError) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'User created', user });
    }, 1000);
  } catch(err){
    res.status(500).json({error:err.message})
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));