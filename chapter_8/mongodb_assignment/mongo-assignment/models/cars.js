const mongoose = require("mongoose"),
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

const carSchema = new Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    year: {type: String, required: true},
    dealership_id: {type: ObjectId, required: true},
});


module.exports = mongoose.model('Car', carSchema);;