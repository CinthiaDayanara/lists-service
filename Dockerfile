# Usa una imagen de Node.js
FROM node:18

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Expone el puerto del servicio
EXPOSE 5001

# Comando de inicio
#CMD ["npm", "start"]
CMD ["node", "src/app.js"]