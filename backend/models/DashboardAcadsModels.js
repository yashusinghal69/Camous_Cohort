const mongoose = require('mongoose');

const AcadsSchema = new mongoose.Schema({
    course: {
        type: String,
        required: [true, "Course is required"],
    },
    instructor: {
        type: String,
        required: [true, "Instructor is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    
});

module.exports = mongoose.model("acads", AcadsSchema);