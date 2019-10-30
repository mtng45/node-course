// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { 
  useNewUrlParser: true, useUnifiedTopology: true
}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').findOne({ _id: new ObjectID('5db8625ee2cfbc2b4ae841e7') }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(user)
  // })

  // db.collection('users').find({ age: 37 }).toArray((error, users) => {
  //   console.log(users)
  // })

  db.collection('tasks').findOne({ _id: new ObjectID('5db85415089d8027b9a688ef')}, (error, task) => {
    console.log(task)
  })

  db.collection('tasks').find({ completed: false }).toArray((error, task) => {
    console.log(task)
  })

})
