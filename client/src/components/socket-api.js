import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');
var listeners = {}

export function join (roomId, username) {
	return verifiedEmit("join", roomId, username)
}

export function create (roomId, username) {
	return verifiedEmit("create", roomId, username)
}

export function getRoomUsernames () {
	return repliedEmit("get-room-usernames")
}

export function addSocketListener (e, fn) {
	socket.on(e, fn)
	listeners[e] = fn
}

export function removeSocketListener (e) {
	socket.removeListener(e, listeners[e])
}

export function debug () {
	socket.emit("log rooms")
}

// TODO make a repliedEmit () that can fetch something

function verifiedEmit (signal, ...args) {
	return new Promise ((resolve, reject) => {
		socket.once(signal + "?", (success) => {
			(success ? resolve : reject)()
		})
		socket.emit(signal, ...args)
	})
}

function repliedEmit (signal, ...args) {
	return new Promise((resolve, reject) => {
		socket.once(signal + "!", (success, data) => {
			if (success) resolve(data)
			else reject()
		})
		socket.emit(signal, ...args)
	})
}