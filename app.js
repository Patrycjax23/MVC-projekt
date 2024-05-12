const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const eventRoutes = require('./routes/events');
const homeRoutes = require('./routes/home');

const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(eventRoutes);

app.use(homeRoutes);

function listeningListener() {
  console.log(`Server is running on port:${PORT}`);
}
app.listen(PORT, listeningListener);
