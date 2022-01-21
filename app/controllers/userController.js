const { User } = require(`../models`);
const jwt = require('../services/jwt');
const db = require(`../database`);

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
            res.json(await User.findById(+req.params.id));
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    createUser: async (req, res) => {
        try {
            console.log(req.body);
            const user = await User.create(req.body);
            const token = jwt.makeToken(user.id);
            user["jwt"] = token;
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    login: async (req, res) => {
        try {
            console.log(req.body);
            const user = await new User(req.body).login();
            console.log(user);
            const token = jwt.makeToken(user.id);
            console.log(token);
            user["jwt"] = token;
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    updateUser: async (req, res) => {
        try {
            console.log(req.body);
            // const user = await new User({id:+req.params.id, ...req.body}).update();
            //console.log("user controller update: ", user);
            const visitor = db.query('SELECT * FROM update_visitor($1)', [{id:+req.params.id, ...req.body}]);
            res.json(visitor);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            console.log(req.params.id);
            const user = await new User({id:+req.params.id}).delete();
            console.log("user controller delete: ", user);
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    }
}

module.exports = userController;