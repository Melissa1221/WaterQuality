const clientIO = require("socket.io-client");
const socketIO = require("socket.io");
const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const serverIO = socketIO(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

// Servicio externo
const serverUrl = "wss://waterquality-production.up.railway.app";

serverIO.on("connection", (serverSocket) => {
  console.log("frontend conectado");

  // Define la conexión al servicio externo como cliente, para consumir los datos
  const clientSocket = clientIO.connect(serverUrl, {
    query: {
      id: "4dAwTN1iACNWkbVpIB0j2xxqlIm1",
      moduleId: 1,
      sensorId: 1,
    },
  });

  // Define el evento que será consumido por el frontend
  serverSocket.on("1/initialData", () => {
    // Define el evento que se conecta al servicio externo
    clientSocket.on("connect", () => {
      console.log(`Conexión exitosa al servidor ${serverUrl}`);

      // Emite un evento al servicio externo
      clientSocket.emit("1/initialData");

      // Recibe la data del servicio externo
      clientSocket.on("1/initialData", (data) => {
        // console.log(data);

        // Reenvía la data del servicio externo al frontend
        serverSocket.emit("1/initialData", data);
      });

      // Recibe la data del servicio externo
      clientSocket.on("1/pH", (data) => {
        // console.log(data);

        // Reenvía la data del servicio externo al frontend
        serverSocket.emit("1/pH", data);
      });

      // Recibe la data del servicio externo
      clientSocket.on("1/temperature", (data) => {
        // console.log(data);

        // Reenvía la data del servicio externo al frontend
        serverSocket.emit("1/temperature", data);
      });

      // Recibe la data del servicio externo
      clientSocket.on("1/tds", (data) => {
        // console.log(data);

        // Reenvía la data del servicio externo al frontend
        serverSocket.emit("1/tds", data);
      });

      // Recibe la data del servicio externo
      clientSocket.on("1/turbidity", (data) => {
        console.log(data);

        // Reenvía la data del servicio externo al frontend
        serverSocket.emit("1/turbidity", data);
      });

      // Recibe la data del servicio externo
      clientSocket.on("1/date", (data) => {
        // console.log(data);

        // Reenvía la data del servicio externo al frontend
        serverSocket.emit("1/date", data);
      });
    });
  });

  // Define el evento de desconexión
  serverSocket.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
});

serverIO.on("error", (data) => {
  console.log(data);
});

// Puerto dónde se ejecutará el backend
const PORT = 5000;

// Escucha del backend
server.listen(PORT, () => {
  console.log(`Servicio backend escuchando en el puerto ${PORT}`);
});
