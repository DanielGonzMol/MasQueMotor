const express = require('express');
const jwt = require('jsonwebtoken');
const poolPromise = require('../db');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    // Consultar al cliente con el correo proporcionado
    const pool = await poolPromise;
    const result = await pool.request()
      .input('correo', sql.NVarChar, correo)
      .input('contrasena', sql.NVarChar, contrasena)
      .query('SELECT * FROM cliente WHERE correo = @correo AND constrasena = @contrasena');
    
    if (result.recordset.length === 0) {
      return res.status(400).json({ message: 'Correo o contraseña incorrectos' });
    }

    const cliente = result.recordset[0];

    // Generar un token JWT para el cliente
    const token = jwt.sign({ cod_cliente: cliente.cod_cliente }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (err) {
    console.error('Error en el inicio de sesión:', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

module.exports = router;
