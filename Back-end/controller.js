const getMessage = require('./service').getMessage;



exports.ask = async (req, res, next) => {
    try {
        const output = await getMessage(req.body);
        res.status(200);
        res.send(output);
    }
    catch (next) {
        return next(next);
    }
};