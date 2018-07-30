const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/StaffingTracker", {
    useNewUrlParser: true
});

module.exports = {mongoose};