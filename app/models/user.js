const CoreModel = require (`./coreModel`);


class User extends CoreModel {

    static async findAllUser() {
        return new User(await CoreModel.getArray(`SELECT * FROM user`));
    }

}


module.exports = User;