const Romario = require('../../models/Romario')
const { ObjectId } = require("mongodb");

class RomarioController {

    async index(req, res) {

        const { page = 1 } = req.query;

        const fields = {}

        try {
            const options = {
                populate: (fields),
                limit: 3,
                page
            }
            const response = await Romario.paginate({}, options)
            res.json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }

    }

    async show(req, res) {

        const { id } = req.params;

        try {
            const response = await Romario.findById(id);
            res.json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }

    }

    async store(req, res) {

        try {
            const response = await Romario.create(req.body);
            res.json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }

    }

    async update(req, res) {

        const { id } = req.params;

        try {
            const response = await Romario.findByIdAndUpdate(id, req.body);
            res.json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }

    }

    async destroy(req, res) {

        const { id } = req.params;

        try {
            const response = await Romario.findByIdAndRemove(id);
            res.json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }

    }



}

module.exports = new RomarioController();