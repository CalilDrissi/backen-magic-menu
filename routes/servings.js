const express = require('express');
const {getServings} = require('../controllers/servings');

const Router = express.Router({mergeParams: true});



router.route('/').get(getServings);





module.exports = router;