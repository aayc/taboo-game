const io = require("socket.io")();
const socketPort = 8000;

var clients = {}

io.on('connection', (client) => {
	clients[client.id] = {
		"username": null,
		"in-room": null
	}

	// On creating a room
	verifiedListener(client, "create", (roomId) => !getAllRoomNames().includes(roomId),
		(roomId, username) => {
			client.join(roomId)
			clients[client.id]["in-room"] = roomId
			clients[client.id]["username"] = username
			console.log(client.id + " started hosting room " + roomId)
			console.log("all room names: " + getAllRoomNames())
		})

	// On joining a room
	verifiedListener(client, "join", (roomId) => getAllRoomNames().includes(roomId),
		(roomId, username) => {
			client.join(roomId)
			clients[client.id]["in-room"] = roomId
			clients[client.id]["username"] = username
			console.log(client.id + " joined " + roomId)
			io.to(roomId).emit("update-room-usernames", getUsernamesInRoom(roomId))
		})

	// On asking for usernames in room
	askListener(client, "get-room-usernames", () => {
		var inquiryId = clients[client.id]["in-room"]
		console.log("users in " + inquiryId + ": " + getUsernamesInRoom(inquiryId))
		return getUsernamesInRoom(inquiryId)
	})

	// On disconnect
	client.on('disconnect', () => {
		console.log("client " + client.id + " disconnected.")
		delete clients[client.id]
	})

})

function verifiedListener(client, signal, isValid, passThrough) {
	client.on(signal, (...args) => {
		if (!isValid(...args)) {
			client.emit(signal + "?", false)
		}
		else {
			passThrough(...args)
			client.emit(signal + "?", true)
		}
	})
}

function askListener (client, signal, passThrough) {
	client.on(signal, (...args) => {
		client.emit(signal + "!", true, passThrough(...args))
	})
}

function getUsernamesInRoom (roomId) {
	return Object.keys(clients).map(id => clients[id])
					.filter(client => client["in-room"] == roomId)
					.map(client => client["username"])
}

function getAllRoomNames () {
	return [...new Set(Object.keys(clients)
					.map(clientId => clients[clientId]["in-room"])
					.filter(roomId => roomId != null))]
}

io.listen(socketPort);
console.log("Socket io listening on port " + socketPort)