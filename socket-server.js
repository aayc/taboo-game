const io = require("socket.io")();
const socketPort = 8000;

var clients = {}
var rooms = {}

io.on('connection', (client) => {
	console.log("client " + client.id + " connected.")
	clients[client.id] = {
		"handle": client
	}

	client.on('create', (roomId, maxPlayers) => {
		if (roomId in rooms) {
			client.emit("createdRoom?", false)
		} else {
			client.join(roomId)
			rooms[roomId] = {
				"members": [client.id],
				"maxPlayers": maxPlayers
			}
			console.log(client.id + " started hosting room " + roomId)
			client.emit("createdRoom?", true)
		}
	});

	client.on('join', (roomId) => {
		client.join(roomId)
		rooms[roomId]["members"].push(client.id)
	})

	client.on('leave', () => {

	})

	client.on('disconnect', () => {
		console.log("client " + client.id + " disconnected.")
		delete clients[client.id]
	})

	// ------- debug --------
	client.on('log rooms', () => {
		console.log(client.rooms)
	})

})

io.listen(socketPort);
console.log("Socket io listening on port " + socketPort)