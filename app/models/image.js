const CoreModel = require('./coreModel');

class Image extends CoreModel {
    async updateImageVisitor() {
        try {
            console.log(`update image visitor`);
            return new Image(await CoreModel.getRow('SELECT * FROM update_image_visitor($1)', [this]));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    async updateImageAnnounce() {
        try {
            console.log('update image announce');
            console.log(this);
            return new Image(await CoreModel.getRow('SELECT * FROM update_image_announce($1)', [this]));
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }
}

module.exports = Image;