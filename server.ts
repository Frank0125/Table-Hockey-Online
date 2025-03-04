import next from "next";
import { createServer } from "node:http";
import { Server } from "socket.io";
import roomHandler from "./src/utils/roomHandler";
import { Room } from "@/interfaces/Room";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const rooms: Room[] = [];
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    roomHandler(io, socket, rooms);
    socket.emit("hello", "world");
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});