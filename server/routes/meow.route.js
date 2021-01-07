const express = require('express');
const meowRoute = express.Router();

// Meow model
let MeowModel = require('../models/Meow');

meowRoute.route('/').get((req, res) => {
    MeowModel.find((err, data) => {
        if(err) {
            return next(err);
        } else {
            res.json(data)
        }
    })
});

meowRoute.route('/create-meow').post((req, res, next) => {
    MeowModel.create(req.body, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data)
        }
    })
});

meowRoute.route('/edit-meow/:id').get((req, res, next) => {
    MeowModel.findById(req.params.id, (err, data) => {
        if(err) {
            return next(err);
        } else {
            res.json(data)
        }
    })
});

// Update meow
meowRoute.route('/update-meow/:id').post((req, res, next) => {
    MeowModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data)
            console.log('Meow successfully updated!')
        }
    })
});

// Delete meow
meowRoute.route('/delete-meow/:id').delete((req, res, next) => {
    MeowModel.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

module.exports = meowRoute;