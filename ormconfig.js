require('dotenv').config()

module.exports = {
  "name": "default",
  "type": "mongodb",
  "url": `${process.env.MongoUrl}`,
  "useNewUrlParser": true,
  "useUnifiedTopology": true,
  "synchronize": true,
  "logging": true,
  "entities": ["src/schemas/*.ts"]
}