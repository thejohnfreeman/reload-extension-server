import WebSocket from 'ws'
import args from 'commander'
import { version } from './package.json'

args
  .version(version)
  .arguments('<host>')
  .parse(process.argv)

const host = args.args[0]

if (!host) {
  args.help()
  process.exit(1)
}

const ws = new WebSocket(`ws://${host}`)

ws.on('open', () => {
  console.log('connected')
})

ws.on('message', (message) => {
  console.log(message)
})
