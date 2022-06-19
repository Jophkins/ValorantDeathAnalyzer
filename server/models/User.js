const {Schema, model, ObjectId} = require("mongoose");

const User = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  gamesPlayed: {type: Number, default: 0},
  kills: {type: Number, default: 0},
  deaths: {type: Number, default: 0},
  kd: {type: Number, default: 0},
  avatar: {type: String},
  games: [{type: ObjectId, ref: 'Game'}]
});

module.exports = model('User', User);
