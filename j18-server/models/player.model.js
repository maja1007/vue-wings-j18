const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Player
let Player = new Schema({
  name: {
    type: String
  },
  position: {
    type: String
  },
  uclub: {
    type: String
  },
  desc: {
    type: String
  },
  number: {
    type: Number
  },
  playerImage: {
    type: String
  }
},{
    collection: 'players'
});

module.exports = mongoose.model('Player', Player);