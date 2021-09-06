// @desc      Get all restaurants
// @route     GET /api/v1/restaurants
// @access    Public

exports.getRestaurants = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all restaurants'});
}


// @desc      Get single restaurant
// @route     GET /api/v1/restaurants/:id
// @access    Public




// @desc      Create new restaurant
// @route     POST /api/v1/restaurant
// @access    Private




// @desc      Update restaurant
// @route     PUT /api/v1/restaurant/:id
// @access    Private




// @desc      Delete restaurant
// @route     DELETE /api/v1/restaurant/:id
// @access    Private