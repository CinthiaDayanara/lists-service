require("dotenv").config();
const express = require("express");
const listsRoutes = require("./src/routes/listsRoutes");
const sequelize = require("./src/config/database");

// Inicializar la aplicación Express
const app = express();
app.use(express.json());

// Rutas
app.use("/lists", listsRoutes);

// Conectar a la base de datos y ejecutar el servidor
const PORT = process.env.PORT || 5001;
sequelize.sync()
  .then(() => {
    console.log("📦 Base de datos sincronizada");
    app.listen(PORT, () => {
      console.log(`🚀 Lists Service corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => console.error("❌ Error al sincronizar la base de datos:", error));
