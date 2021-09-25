const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Restaurant = require('../models/Restaurant');



// @desc      Get all restaurants
// @route     GET /api/v1/restaurants
// @access    Public

// @desc      Get single restaurant
// @route     GET /api/v1/restaurants/:id
// @access    Public

// @desc      Create new restaurant
// @route     POST /api/v1/restaurants
// @access    Private

// @desc      Update restaurant
// @route     PUT /api/v1/restaurants/:id
// @access    Private

// @desc      Delete restaurant
// @route     DELETE /api/v1/restaurants/:id
// @access    Private
exports.deleteRestaurant = asyncHandler(async (req, res, next) => {
    const restaurant = await Restaurant.findById(req.params.id);
  
    if (!restaurant) {
      return next(
        new ErrorResponse(`Restaurant not found with id of ${req.params.id}`, 404)
      );
    }
  
    // Make sure user is bootcamp owner
    // if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
    //   return next(
    //     new ErrorResponse(
    //       `User ${req.user.id} is not authorized to delete this bootcamp`,
    //       401
    //     )
    //   );
    // }
  
    await restaurant.remove();
  
    res.status(200).json({ success: true, data: {} });
  });


  // @desc     Upload photo for Restaurant
// @route     PUT /api/v1/restaurants/:id/photo
// @access    Private


