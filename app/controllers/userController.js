const { User } = require(`../models`);

const userController = {
    
    AllUsers: async (_, res) => {
        try {
            res.json(await User.findAllUsers());
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    OneUser: async (req, res) => {
        try {
            res.json(await User.findById(req.params.id));
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },
}

module.exports = userController;