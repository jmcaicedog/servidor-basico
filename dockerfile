# Usar una imagen base oficial de Node.js
FROM node:16

# Configurar el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos necesarios
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código al contenedor
COPY . .

# Exponer el puerto que usará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
