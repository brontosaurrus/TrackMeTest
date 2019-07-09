const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
