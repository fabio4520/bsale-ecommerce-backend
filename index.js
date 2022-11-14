const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Server running');
})

app.use(express.json())

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
})

routerApi(app)