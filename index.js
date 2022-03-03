const express = require('express')
const http = require('http')
const WebSocket = require('ws')

const app = express();

const server = http.createServer(app)

const wss = new WebSocket.Server({ server })

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    ws.send(`${message}`)
  })
})

server.listen(process.env.PORT || 8999, () => {
  console.log(`Server started on port ${server.address().port} :)`)
})