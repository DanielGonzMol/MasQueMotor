// src/index.js

const express = require('express');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth'); // Ruta de autenticación

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/auth', authRoute); // Usar la ruta de autenticación


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
