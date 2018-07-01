import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

export function join (roomId) {
	socket.emit("join", roomId);
}

export function createRoom (roomId, maxPlayers) {
	return new Promise((resolve, reject) => {
		socket.once("createdRoom?", (success) => {
			(success ? resolve : reject)()
		})

		socket.emit("create", roomId, maxPlayers)
	})
}

export function debug () {
	socket.emit("log rooms")
}