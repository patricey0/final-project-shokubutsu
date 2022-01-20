const { User } = require(`../models`);

const userController = {
    
    getAllUsers: async (_, res) => {
        try {
            res.json(await User.findAll());
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    getOneUser: async (req, res) => {
        try {
            res.json(await User.findById(req.params.id));
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    createUser: async (req, res) => {
        try {
            console.log(req.body);
            res.json(await User.create(req.body));
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    }
}

module.exports = userController;