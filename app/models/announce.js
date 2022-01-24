const CoreModel = require (`./coreModel`);

/**
 * An entity representing an User
 * @typedef User
 * @property {number} id
 * @property {text} nickname
 * @property {text} mail
 * @property {password} password
 * @property {text} city
 * @property {text} picture
 * @property {boolean} isAdmin
 */

class Announce extends CoreModel {

    static async findAll() {
        try {
            return new User(await CoreModel.getArray(`SELECT * FROM "announce"`));
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
            return new User(await CoreModel.getRow('SELECT * FROM "announce" WHERE id=$1', [id]));
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
            return new User(await CoreModel.getRow('SELECT * FROM new_announce($1)', [data]));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }

    async update() {
        try {
            console.log('data:', this)
            const data = {id:this.id, nickname:this.nickname};
            console.log(data);
            const user = new User(await CoreModel.getRow(`SELECT * FROM update_announce($1)`, [data]));
            return user;
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }


    async delete() {
        try {
            console.log('data:', this.id)
            const user = await CoreModel.getRow('DELETE FROM announce WHERE id=$1', [this.id]);
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

module.exports = Announce;