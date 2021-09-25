const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Serving = require('../models/Serving');



// @desc      Get servings
// @route     GET /api/v1/servings
//@route      GET /api/v1/restaurants/:restaurantId/servings
// @access    Public

exports.getServings = asyncHandler(async(req, res, next) => {
    let query;

    if(req.params.restaurantId) {
        query = Serving.find({restaurant: req.params.restaurantId});

    } else {
        query = Serving.find().populate({path: 'restaurant', select: 'name description'});
    }

    const servings = await query;

    res.status(200).json({
        success: true,
        count: servings.length,
        data: servings
    })
});



// @desc      Get single serving
// @route     GET /api/v1/servings/:id
// @access    Public

// @desc      Create new serving
// @route     POST /api/v1/servings
// @access    Private

// @desc      Update serving
// @route     PUT /api/v1/servings/:id
// @access    Private

// @desc      Delete serving
// @route     DELETE /api/v1/servings/:id
// @access    Private