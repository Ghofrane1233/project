var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    prix: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('produit', userSchema);