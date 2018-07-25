let express = require('express');

let router = express.Router();


let AddController = require('./controller')


router.post('/hospital', AddController.registerDetails);


module.exports = router;