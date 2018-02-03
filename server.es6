import WebSocket from 'ws'

const wss = new WebSocket.Server({ port: 7654 })

wss.on('connection', (ws) => {
  console.log('connected')
  ws.send('hello')
})
