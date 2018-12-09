import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://127.0.0.1:4002") //TODO the endpoint must be taken from .env

export default socket
