const express = require("express");
const app = express();
const compression = require('compression')

app.use(express.json());
const port = 3000;

app.use(express.static('client/dist'));
app.use(compression());

app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);
});

