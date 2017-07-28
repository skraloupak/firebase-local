const firebase = require('firebase-admin')
const log = require('./common/logger')

const credentials = {
  databaseURL: 'ws://127.0.1:5000',
  credential: {
    getAccessToken: () => ({
      expires_in: 0,
      access_token: '',
    }),
  },
}

const app = firebase.initializeApp(credentials)
const client = app.database().ref('states')

async function pushValue() {
  await client.update({
    states: {
      CA: 'California',
      AL: 'Alabama',
      KY: 'Kentucky',
    },
  })
}

async function getValues() {
  const snapshot = await client.once('value')
  const states = snapshot.val()

  log.debug(states)
}

pushValue()
getValues()

