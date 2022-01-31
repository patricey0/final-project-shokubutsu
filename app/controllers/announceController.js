const { Announce } = require(`../models`);

const announceController = {
    
    getAllAnnounces: async (_, res) => {
        try {
            res.json(await Announce.findAll());
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    getAllAnnouncesByUser: async (req, res) => {
        try {
            res.json(await Announce.findAllByUser(+req.params.id));
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    getOneAnnounce: async (req, res) => {
        try {
            res.json(await Announce.findById(+req.params.id));
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    createAnnounce: async (req, res) => {
        try {
            console.log(req.body);
            const announce = await Announce.create(req.body);
            res.json(announce);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    updateAnnounce: async (req, res) => {
        try {
            //console.log(req.body);
            const announce = await new Announce({id:+req.params.id, ...req.body}).update();
            console.log("announce after update: ", announce);
            res.json(announce);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    deleteAnnounce: async (req, res) => {
        try {
            console.log(req.params.id);
            await new Announce({id:+req.params.id}).delete();
            res.json(`Announce id : ${+req.params.id}, has been deleted.`);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    }
}

module.exports = announceController;