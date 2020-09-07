const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PessoaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
}, { collection: 'car_pessoa', timestamps: true },
);

PessoaSchema.plugin(mongoosePaginate);

const Pessoa = mongoose.model('Pessoa', PessoaSchema);

module.exports = Pessoa;