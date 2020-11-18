// lambda functions 
const MongoClient = require("mongodb").MongoClient

const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = 'rhlibrary'

let cachedDb = null

// Collection Name
const collectionName = 'books'

// const defaultPageSize = 10

const connectToDatabase = async (uri) => {
  if (cachedDb) return cachedDb

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
  })

  cachedDb = client.db(DB_NAME)

  return cachedDb
}

const queryDatabase = async (db) => {
  const book = await db.collection(collectionName).find({}).toArray()

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  }
}

module.exports.handler = async (event, context) => {
  // const unixTime = Math.floor(Date.now() / 1000)
  context.callbackWaitsForEmptyEventLoop = false
  const db = await connectToDatabase(MONGODB_URI)
  return queryDatabase(db)
  // return {
  //   statusCode: 200,
  //   body: `The Unix time is ${unixTime}`,
  // }
}