const CoreModel = require (`./coreModel`);


class User extends CoreModel {

    static async findAllUsers() {
        return new User(await CoreModel.getArray(`SELECT * FROM "user"`));
    }

    static async findById(id) {
        return new User(await CoreModel.getRow('SELECT * FROM "user" WHERE id=$1', [id]));
    }

}

module.exports = User;