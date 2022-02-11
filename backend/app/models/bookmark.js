const CoreModel = require('./coreModel');


class Bookmark extends CoreModel {

    static async findAllByUser(userId) {
        try {
            return new Bookmark(await CoreModel.getArray('select * from bookmarked where visitor_id=$1', [userId]));
        } catch (error) {   
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    static async addBookmark(userId, announceId) {
        try {
            const data = JSON.stringify({"visitor_id":userId, "announce_id":announceId});
            console.log(`bookmark mode :${data}`);
            return new Bookmark(await CoreModel.getRow('select * from add_bookmark($1)', [data]))
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    async deleteBookmark() {
        try {
            console.log(this);
            return await CoreModel.getRow('delete from bookmarked where visitor_id=$1 and announce_id=$2', [this.userId, this.announceId]);
        } catch (error) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }
}

module.exports = Bookmark;
