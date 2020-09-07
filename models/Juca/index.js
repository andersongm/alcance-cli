const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const JucaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
}, { collection: 'car_juca', timestamps: true },
);

JucaSchema.plugin(mongoosePaginate);

const Juca = mongoose.model('Juca', JucaSchema);

module.exports = Juca;