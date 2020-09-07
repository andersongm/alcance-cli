const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const RomarioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
}, { collection: 'car_romario', timestamps: true },
);

RomarioSchema.plugin(mongoosePaginate);

const Romario = mongoose.model('Romario', RomarioSchema);

module.exports = Romario;