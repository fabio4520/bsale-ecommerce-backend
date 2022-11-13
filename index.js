const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server running');
})

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
})

routerApi(app)