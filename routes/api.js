const router = require('express').Router();
const Workout = require('../models/workout');

router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: '$exercises.duration' }
            }
        }
    ]).then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

router.put('/api/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            $push: { exercises: req.body }
        }
        ).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        });
}
)

module.exports = router;