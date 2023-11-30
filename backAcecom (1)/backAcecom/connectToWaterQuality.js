const clientIO = require('socket.io-client')

// Servicio externo
const serverUrl = 'wss://waterquality-production.up.railway.app'

const clientSocket = clientIO.connect(serverUrl, {
	query: {
		id: '4dAwTN1iACNWkbVpIB0j2xxqlIm1',
		moduleId: 1,
		sensorId: 1,
	},
})

// Define el evento que se conecta al servicio externo
clientSocket.on('connect', () => {
	console.log(`Conexión exitosa al servidor ${serverUrl}`)

	// Emite un evento al servicio externo
	clientSocket.emit('1/initialData')

	// Recibe la data del servicio externo
	clientSocket.on('1/initialData', data => {
		// console.log(data)
	})


	// Emite un evento al servicio externo
	clientSocket.emit('1/pH')

	// Recibe la data del servicio externo
	clientSocket.on('1/pH', data => {
		// console.log(data)
	})

	// Emite un evento al servicio externo
	clientSocket.emit('1/temperature')

	// Recibe la data del servicio externo
	clientSocket.on('1/temperature', data => {
		// console.log(data)
	})

	// Emite un evento al servicio externo
	clientSocket.emit('1/tds')

	// Recibe la data del servicio externo
	clientSocket.on('1/tds', data => {
		// console.log(data)
	})

	// Emite un evento al servicio externo
	clientSocket.emit('1/turbidity')

	// Recibe la data del servicio externo
	clientSocket.on('1/turbidity', data => {
		// console.log(data)
	})

	// Emite un evento al servicio externo
	clientSocket.emit('1/date')

	// Recibe la data del servicio externo
	clientSocket.on('1/date', data => {
		// console.log(data)
	})
	
})
//