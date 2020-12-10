const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Collection = new Schema({
    gameName: {
        type: String
    },
    gameDetails: {
        type: String
    },
    gamePrice: {
        type: Number
    },
    dealExpire: {
        type: Date
    },
    checkMark: {
        type: Boolean
    }


})