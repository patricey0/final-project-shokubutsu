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
        return new User(await CoreModel.getArray(`SELECT * FROM "user"`));
    }

    static async findById(id) {
        return new User(await CoreModel.getRow('SELECT * FROM "user" WHERE id=$1', [id]));
    }

    static async create(json) {
        const password = await bcrypt.hash(json.password, 10);
        json.password = password
        return new User(await CoreModel.getRow('SELECT * FROM new_user($1)', [json]));
    }

};

module.exports = User;