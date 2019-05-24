const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 9009;
const app = express();
app.use(bodyParser.json());
app.listen(port, () => console.log(`Server running on port ${port}`));