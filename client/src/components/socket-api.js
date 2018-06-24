import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function hello() {
	console.log("saying hello")
	socket.emit("hello")
}

export default hello