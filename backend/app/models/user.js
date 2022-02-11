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
 * @property {text} picture
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

    static async findByName(nickname) {
        try {
            return new User(await CoreModel.getRow('SELECT * FROM "visitor" WHERE nickname=$1', [nickname]));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
        
    }

    static async findByEmail(mail) {
        try {
            return new User(await CoreModel.getRow('SELECT * FROM "visitor" WHERE mail=$1', [mail]));
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
            const user = new User(await CoreModel.getRow('SELECT * FROM new_visitor($1)', [data]));
            console.log(user);
            return user;
        } catch (error) {
            console.log(error);
            if (error) {
                throw new Error(error);
            }
            throw error;
        }
        
    }

    async update() {
        try {
            console.log('data:', this)
            this.password = await bcrypt.hash(this.password, 10);
            const user = new User(await CoreModel.getRow(`SELECT * FROM update_visitor($1)`, [this]));
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
            const user = await CoreModel.getRow('DELETE FROM visitor WHERE id=$1', [this.id]);
            return user;
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    async login() {
        try {
            const user = await CoreModel.getRow('SELECT * FROM "visitor" WHERE mail=$1', [this.mail]);
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

    async checkPwd() {
        try {
            const user = await CoreModel.getRow('SELECT * FROM "visitor" WHERE id=$1', [this.id]);
            if (!user) { throw new Error ('Identification failed, password incorrect.')};
            const isPwdValid = await bcrypt.compare(this.password, user.password);
            if (!isPwdValid) { throw new Error ('Identification failed, password incorrect.')} 
            return isPwdValid;
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    async reconnect() {
        try {
            console.log(this);
            const user = await CoreModel.getRow('SELECT * FROM "visitor" WHERE id=$1', [this]);
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