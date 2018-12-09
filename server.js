const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

// our localhost port
const port = 4002

const app = express()

const server = http.createServer(app)

const io = socketIO(server)

io.on('connection', socket => {
  console.log('User connected')

  socket.on('add stock', (stockCode) => {
    console.log('SERVER add stock: ', stockCode)
    socket.broadcast.emit('stock added', stockCode)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
