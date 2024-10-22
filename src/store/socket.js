import { io } from 'socket.io-client';
const socket = io('ws://194.87.206.227:3000', {
    transports: ['websocket', 'polling'],
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
    },
});
export default socket;
