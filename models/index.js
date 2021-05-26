const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
      },
    exercises: [
        {
         type: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    sets: {
        type: String,
        required: true
    }   
        }
    ]
    
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
