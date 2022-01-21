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
            return new User(await CoreModel.getArray(`SELECT * FROM "visitor"`));
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
            return new User(await CoreModel.getRow('SELECT * FROM "visitor" WHERE id=$1', [id]));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }

    static async create(data) {
        try {
            const password = await bcrypt.hash(data.password, 10);
            data.password = password
            console.log(data);
            return new User(await CoreModel.getRow('SELECT * FROM new_visitor($1)', [data]));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }

    static async update(data) {
        try {
            console.log('data:', data)
            return new User(await CoreModel.getRow('SELECT update_visitor($1) AS id', [data]));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }

    static async delete(id) {
        
    }

    async login() {
        try {
            const user = await CoreModel.getRow('SELECT * FROM "visitor" WHERE nickname=$1', [this.nickname]);
            if (!user) { throw new Error ('Identification failed, username or password invalid.')};
            const isPwdValid = await bcrypt.compare(this.password, user.password);
            if (!isPwdValid) { throw new Error ('Identification failed, username or password invalid.')} 
            return user;
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