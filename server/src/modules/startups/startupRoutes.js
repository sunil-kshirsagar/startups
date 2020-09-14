const express = require('express');
const router = new express.Router();
const startupModel = require('./startupModel');
const mongoose = require('mongoose');
const stocksController = require('./startupController');

router.get('/', stocksController.getAllStartups);

router.post('/', (req, res, next) => {
    const stocks = new startupModel({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        country: req.body.country
    });
    stocks.save().then(result => {
        res.status(201).json({
            message: 'handling post request',
            createdProduct: result 
        });
    }).catch(err => {
        res.status(500).json({
            message: 'something went wrong',
            createdProduct: err
        });
    });
});

router.get('/:startupId', (req, res, next) => {
    const id = req.params.startupId;
    startupModel.find({_id: id}).exec().then((doc) => {
        res.status(201).json(doc);
    }).catch((err) => {
        res.status(404).json({
            message: err
        });
    });
    

});

router.patch('/:startupId', (req, res, next) => {
    const id = req.params.startupId;
    startupModel.update({_id: id}, {$set: req.body})
    .then(doc => {
        res.status(200).json({
            message: 'Updated Startup',
            startup: doc
        });
    }).catch(err => {
        res.status(500).json({
            message: err
        });
    });
});

router.delete('/:startupId', (req, res, next) => {
    const id = req.params.startupId;
    startupModel.deleteOne({_id: id}).exec().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;