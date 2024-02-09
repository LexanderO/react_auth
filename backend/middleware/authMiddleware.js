// authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
    const token = req.headers.authorization;

    // check json web token exists & is verified
    if (token) {
        jwt.verify(token, 'your secret', (err, decodedToken) => {
            if (err) {
                res.status(401).json({ error: 'Unauthorized' });
            } else {
                req.user = decodedToken.id;
                next();
            }
        });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = { requireAuth };
