const express = require("express");
const {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurants");

//Include other resource routers
const servingRouter = require('./servings');

const router = express.Router();

//Re-route into other resource routers
router.use('/:restaurantId/serving', servingRouter);



router.route("/")
    .get(getRestaurants)
    .post(createRestaurant);

router.route("/:id")
    .get(getRestaurant)
    .put(updateRestaurant)
    .delete(deleteRestaurant);


module.exports = router;
