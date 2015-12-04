var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  name: String,
  url: String,
  description: String,
  images: [String],
  address: String,
  phone: String
});

mongoose.model('Restaurant', RestaurantSchema);
