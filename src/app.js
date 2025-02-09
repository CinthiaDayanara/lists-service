const express = require('express');
const dotenv = require('dotenv');
const listRoutes = require('./routes/listsRoutes');

dotenv.config();

const app = express();

app.use(express.json());  // ✅ Middleware para procesar JSON

app.use('/api', listRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
