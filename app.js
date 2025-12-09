const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  const now = Date.now();
  while (Date.now() - now < 10) {} 
  res.send('Hello from simple-app! Time: ' + new Date().toISOString());
});

app.listen(port, () => console.log(`Listening on ${port}`));
