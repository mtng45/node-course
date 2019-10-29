// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { 
  useNewUrlParser: true, useUnifiedTopology: true
}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: 'MTNG',
  //   age: 37
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }

  //   console.log(result.ops)
  // })

  // db.collection('users').insertMany([{
  //   name: 'MTNG',
  //   age: 37
  // }, {
  //   name: 'kenta',
  //   age: 33
  // }], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }

  //   console.log(result.ops)
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Clean the house',
  //     completed: true
  //   }, {
  //     description: 'Renew inspection',
  //     completed: false
  //   }, {
  //     description: 'Pot plants',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert tasks!')
  //   }

  //   console.log(result.ops)
  // })
})
