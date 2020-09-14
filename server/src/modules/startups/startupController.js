const startupModel = require('./startupModel');

exports.getAllStartups = (req, res, next) => {
    startupModel.find({})
    .exec()
    .then((docs) => {
        const response = {
            count: docs.length,
            startups: docs.map(doc => {
                return {
                    id: doc._id,
                    name: doc.name,
                    country: doc.country,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:5000/startup/' + doc._id
                    }
                }
            })
        }
        res.status(200).json({
            message: 'handling Get request',
            startups: response
        })
    }).catch((error) => {
        res.status(500).json({
            error
        });
    });;
};