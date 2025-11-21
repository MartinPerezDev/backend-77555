import express from "express";
import http from "http";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import viewsRouter from "./routes/views.router.js";

const app = express();
const server = http.createServer(app);

//INPUT - OUTPUT
const io = new Server(server);

app.use(express.static("public"));

//handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//persistencia en memoria de los mensajes de chat
const messages = []

//websockets desde el servidor
io.on("connection", (socket)=> {
  //emitimos el historial de mensajes al usuario que se conecto
  socket.emit("message history", messages);

  console.log("Nuevo cliente conectado! " + socket.id);

  //escuchamos un evento
  socket.on("new message", (data)=> {
    messages.push(data);
    
    //transimitos el nuevo mensaje a todos los clientes
    io.emit("broadcast new message", data);
  });

});

//endpoints
app.use("/", viewsRouter);

server.listen(8080, () => {
  console.log("Servidor iniciado correctamente!");
});