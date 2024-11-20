const express = require("express");
const app = express();

// Rutas
app.get("/doctores", (req, res) => {
  res.json([
    { id: 1, nombre: "Dr. Juan" },
    { id: 2, nombre: "Dra. María" },
  ]);
});

app.get("/medicamentos", (req, res) => {
  res.json([
    { id: 1, nombre: "Paracetamol" },
    { id: 2, nombre: "Ibuprofeno" },
  ]);
});

// Configuración del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
