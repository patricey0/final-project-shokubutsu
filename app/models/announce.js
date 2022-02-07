const CoreModel = require (`./coreModel`);

/**
 * An entity representing an Announce
 * @typedef Announce
 * @property {number} id
 * @property {text} title
 * @property {text} images
 * @property {timestamp} creation_date
 * @property {timestamp} update_date
 * @property {text} description
 * @property {text} category
 */

class Announce extends CoreModel {

    static async findAll() {
        try {
            return new Announce(await CoreModel.getArray(`SELECT * FROM announces_with_author`));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }

    static async findAllByUser(userId) {
        try {
            return new Announce(await CoreModel.getArray(`SELECT * FROM announce WHERE visitor_id=$1`, [userId]));
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
            return new Announce(await CoreModel.getRow(`SELECT * FROM announce_with_author($1)`, [id]));
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

    async update() {
        try {
            console.log('data:', this)
            const announce = new Announce(await CoreModel.getRow(`SELECT * FROM update_announce($1)`, [this]));
            return announce;
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }

    async setFlag() {
        try {
            const announce = new Announce(await CoreModel.getRow(`SELECT * FROM report_announce($1)`, [this]));
            return announce
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

    async deleteByUserId() {
        try {
            console.log('data:', this.id)
            const announce = await CoreModel.getArray('DELETE FROM announce WHERE visitor_id=$1', [this.id]);
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