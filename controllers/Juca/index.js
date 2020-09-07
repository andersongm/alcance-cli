const Juca = require('../../models/Juca')
const { ObjectId } = require("mongodb");

class JucaController {

    async index(req, res) {

        const { page = 1 } = req.query;

        const fields = {}

        try {
            const options = {
                populate: (fields),
                limit: 3,
                page
            }
            const response = await Juca.paginate({}, options)
            res.json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }

    }

    async show(req, res) {

        const { id } = req.params;

        try {
            const response = await Juca.findById(id);
            res.json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }

    }

    async store(req, res) {

        try {
            const response = await Juca.create(req.body);
            res.json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }

    }

    async update(req, res) {

        const { id } = req.params;

        try {
            const response = await Juca.findByIdAndUpdate(id, req.body);
            res.json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }

    }

    async destroy(req, res) {

        const { id } = req.params;

        try {
            const response = await Juca.findByIdAndRemove(id);
            res.json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }

    }



}

module.exports = new JucaController();