const mongoose = require('mongoose');
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId

      dealershipSchema = new Schema({
          make: {type: String, required: true},
          city: {type: String, required: true},
          province: {type: String, required: true},
          postal_code: {type: String, required: true},
          street: {type: String, required: true},
          reviews: [
              {
                  review: { type:String },
                  name:  { type:String },
              }
          ]
      })

module.exports = mongoose.model('Dealership', dealershipSchema);





