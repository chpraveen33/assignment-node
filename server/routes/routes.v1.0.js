let express = require('express');
let router = express.Router();


let registerRouter = require('../api/v1.0/register/route');





router.use('/register', registerRouter);





module.exports = router;