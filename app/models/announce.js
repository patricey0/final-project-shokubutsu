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
            return new Announce(await CoreModel.getArray(`SELECT * FROM "announce"`));
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
            return new Announce(await CoreModel.getRow('SELECT * FROM "announce" WHERE id=$1', [id]));
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
            console.log(data);
            return new Announce(await CoreModel.getRow('SELECT * FROM new_announce($1)', [data]));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }

    // async update() {
    //     try {
    //         console.log('data:', this)
    //         console.log(data);
    //         const announce = new Announce(await CoreModel.getRow(`SELECT * FROM update_announce($1)`, [this]));
    //         return announce;
    //     } catch (error) {
    //         console.log(error);
    //         if (error.detail) {
    //             throw new Error(error.detail);
    //         }
    //         throw error;
    //     }
        
    // }


    async delete() {
        try {
            console.log('data:', this.id)
            const announce = await CoreModel.getRow('DELETE FROM announce WHERE id=$1', [this.id]);
            return announce;
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