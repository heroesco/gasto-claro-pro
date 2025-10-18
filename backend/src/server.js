import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Gasto Claro API funcionando!' });
});

// Ruta para obtener gastos (placeholder)
app.get('/api/gastos', (req, res) => {
  res.json([
    { id: 1, descripcion: 'Supermercado', monto: 15000, categoria: 'comida' },
    { id: 2, descripcion: 'Transporte', monto: 5000, categoria: 'transporte' }
  ]);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
