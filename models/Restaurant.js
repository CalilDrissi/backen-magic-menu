const mongoose = require('mongoose');
const slugify = require('slugify');

const RestaurantSchema = new mongoose.Schema ({
    name: {},
    slug: String,
    address: {
        type: String,
        required: [true, 'Please add an address']
      },
      phone: {
        type: String,
        maxlength: [20, 'Phone number can not be longer than 20 characters']
      },
    createdAt: {
        type: Date,
        default: Date.now
      },
      photo: {
        type: String,
        default: 'no-photo.jpg'
      },
      qr: {
        type: String,
        default: 'no-qr.jpg'
      }
});



//Cascade delete servings when a restaurant is deleted
RestaurantSchema.pre('remove', async function (next) {
  await this.model('Serving').deleteMany({ restaurant: this._id });
  next();
});





module.exports = mongoose.model('Restaurant', RestaurantSchema);