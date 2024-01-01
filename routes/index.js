var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller')

/* GET home page. */
router.post('/insert',user.insert);
router.get('/',user.select);
router.get('/delete/:id',user.delete);
router.post('/update/:id',user.update);

module.exports = router;
