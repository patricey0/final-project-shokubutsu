const { User } = require(`../models`);
const jwt = require('../services/jwt');
const { Announce } = require(`../models`);

const userController = {
    
    getAllUsers: async (_, res) => {
        try {
            res.json(await User.findAll());
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    getOneUser: async (req, res) => {
        try {
            const user = await User.findById(+req.params.id);
            res.json(user)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    createUser: async (req, res) => {
        try {
            //console.log(req.body);
            const isNicknameExists = await User.findByName(req.body.nickname);
            if (isNicknameExists.nickname) throw new Error().message = `Ce pseudo est déjà utilisé.`
            const isEmailExists = await User.findByEmail(req.body.mail);
            if (isEmailExists.mail) throw new Error().message = `Cet email est déjà utilisé.`
            const user = await User.create(req.body);
            console.log('controller create user : ', user);
            const token = jwt.makeToken(user.id);
            user["jwt"] = token;
            user["logged"] = true;
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    login: async (req, res) => {
        try {
            //console.log(req.body);
            const user = await new User(req.body).login();
            //console.log(user);
            const token = jwt.makeToken(user.id);
            //console.log(token);
            user["jwt"] = token;
            user["logged"] = true;
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    checkPwd: async (req, res) => {
        try {
            const user = await new User(req.body).checkPwd();
            if (!user) { throw new Error ('Identification failed, password incorrect.')};
            res.json(`Identification OK.`)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    reconnect: async (req, res) => {
        try {
            //console.log('controller user reconnect :', req.userId);
            const user = await User.findById(req.userId);
            user["logged"] = true;
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    updateUser: async (req, res) => {
        try {
            //console.log(req.body);
            const isNicknameExists = await User.findByName(req.body.nickname);
            if (isNicknameExists.nickname) throw new Error().message = `Ce pseudo est déjà utilisé.`
            const isEmailExists = await User.findByEmail(req.body.mail);
            if (isEmailExists.mail) throw new Error().message = `Cet email est déjà utilisé.`
            //const userBeforeUpdate = await User.findById(+req.params.id);
            //console.log(`user before update : `, userBeforeUpdate);
            const user = await new User({id:+req.params.id, ...req.body}).update();
            //console.log("user after update: ", user);
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    deleteUser: async (req, res) => {
        try {
            //console.log(req.params.id);
            await new Announce(+req.params.id).deleteByUserId();
            await new User({id:+req.params.id}).delete();
            res.json(`The user id : ${+req.params.id} has been deleted.`);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

module.exports = userController;