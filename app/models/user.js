const CoreModel = require (`./coreModel`);
const bcrypt = require(`bcrypt`);

/**
 * An entity representing an User
 * @typedef User
 * @property {number} id
 * @property {text} nickname
 * @property {text} mail
 * @property {password} password
 * @property {text} city
 * @property {boolean} isAdmin
 */

class User extends CoreModel {

    static async findAll() {
        try {
            return new User(await CoreModel.getArray(`SELECT * FROM "user"`));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }

    static async findById(id) {
        try {
            return new User(await CoreModel.getRow('SELECT * FROM "user" WHERE id=$1', [id]));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }

    static async create(json) {
        try {
            const password = await bcrypt.hash(json.password, 10);
            json.password = password
            console.log(json);
            return new User(await CoreModel.getRow('SELECT * FROM new_user($1)', [json]));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }

    static async update(json) {
        try {
            return new User(await CoreModel.getRow('SELECT * FROM update_user($1)', [json]));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }

    async login(json) {
        try {
            const nickname = JSON.parse(json.nickname)
            const user = new User(await CoreModel.getRow('SELECT * FROM "user" WHERE nickname=$1', [nickname]));
            if (!user) { throw new Error ('Identification failed, username or password invalid.')};
            const isPwdValid = await bcrypt.compare(json.password, user.password);
            if (!isPwdValid) { throw new Error ('Identification failed, username or password invalid.')} 
            return new User(await CoreModel.getRow('SELECT * FROM "user" WHERE nickname=$1', [nickname]));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }

};

module.exports = User;