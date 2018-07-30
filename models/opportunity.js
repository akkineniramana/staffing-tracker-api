const mongoose = require('mongoose');
const {Schema} = mongoose;


const demandSchema = new Schema({
    'skill': {
        type: String
    },
    'total': {
        type: Number
    }
})

const opportunitySchema = new Schema({
    'name': {
        type: String
    },
    'status': {
        type: String
    },
    'demands': {
       type: [demandSchema],
       default: []
    }
})

const Opportunity = mongoose.model('opportunity', opportunitySchema)

module.exports = {Opportunity};

