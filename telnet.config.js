import json from 'rollup-plugin-json'

export default {
  input: 'telnet.es6',
  output: {
    file: 'telnet.js',
    format: 'cjs'
  },
  plugins: [json()]
}
