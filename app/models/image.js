const CoreModel = require('./coreModel');

class Image extends CoreModel {
    async updateImage() {
        try {
            const data = {
                "id":this.userId,
                "picture":this.image_url
            };
            return new Image(await CoreModel.getRow('SELECT * FROM update_image_visitor($1)', [data]));
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