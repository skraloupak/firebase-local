const bunyan = require('bunyan')

const logStreams = [{
  level: 'debug',
  stream: process.stdout,
}]

const logger = bunyan.createLogger({
  name: 'FirebaseLocal',
  streams: logStreams,
})

module.exports = logger
