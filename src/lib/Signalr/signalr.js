const signalR = require('@microsoft/signalr')

export default class SignalR {
  constructor () {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(`http://10.0.1.12:8888/WebSocketHub`)
      .build()
    console.log(connection)
    connection.on('ReceiveMessage', (user, message) => {
      console.log(user, message)
    })
    connection.on('Send', data => {
      console.log(data)
    })
    connection.start()
      .then(() => {
        setInterval(() => {
          connection.invoke('send', 'Hello')
        }, 2000)
      })
  }
}

