import { Room } from '@/interfaces/Room';
import { Server, Socket } from 'socket.io';
const createID = (): string => {
    return crypto.randomUUID(); // Generates a unique ID
};


const roomHandler = (io: Server, socket: Socket, rooms: Room[]) => {
    const create = (payload: any, callback: (error: any, result: any) => void) => {
        if (payload.type === "stranger") {
            const index = rooms.findIndex((room: any) => room.vacant == true);
            if (index >= 0) {
                const room = rooms[index]; // get the first vacant room
                room.players[socket.id] = { // add the player to the room with no message
                    message: null
                }
                room.vacant = false;
                socket.join(room.roomId);
                io.to(room.roomId).emit("room:get", room);
                callback(null, room.roomId);
            } else {
                const room = {
                    roomId: createID(),
                    players: {
                        [socket.id]: {
                            message: null
                        },
                    },
                    vacant: true
                }
                rooms.push(room);
                socket.join(room.roomId);
                io.to(room.roomId).emit("room:get", room);
                callback(null, room.roomId);
            }
        }
    }

    const update = (payload: any) => {
        const index = rooms.findIndex((room) => room.roomId === payload.roomdId);
        if (index >= 0) {
            rooms[index] = payload;
            io.to(payload.roomId).emit("room:get", payload);
        }
    }
    socket.on("room:create", create);
}

export default roomHandler;