const mongoose = require('mongoose');



const ServingSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add a course title']
      },
    description: {
        type: String,
        required: [true, 'Please add a description']
      },
    photo: {
        type: String,
        default: 'no-photo.jpg'
      },
    price: { type : Array , "default" : [] },
    restaurant: {
        type: mongoose.Schema.ObjectId,
        ref: 'Restaurant',
        required: true
    }
});


module.exports = mongoose.model('Serving', ServingSchema);