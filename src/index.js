const express = require('express');
const dotenv = require('dotenv');
//const authRoute = require('./routes/auth'); // Ruta de autenticación

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Servir archivos estáticos de la carpeta 'public'
app.use(express.static('public'));  // Esto servirá la carpeta 'public' directamente

app.use(express.json());
//app.use('/api/auth', authRoute); // Usar la ruta de autenticación

// Ruta principal para asegurar que todo esté funcionando
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
