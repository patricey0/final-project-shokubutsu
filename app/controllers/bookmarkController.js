const { Bookmark } = require('../models/');

const bookmarkController = {

    getBookmarks : async (req, res) => {
        try {
            const bookmarks = await Bookmark.findAllByUser(+req.params.userId)
            res.json(bookmarks);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    addBookmark : async (req, res) => {
        try {
            console.log(+req.params.userId, +req.params.announceId);
            const bookmarked = await Bookmark.addBookmark(+req.params.userId, +req.params.announceId);
            res.json(bookmarked)
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    },

    deleteBookmark : async (req,res) => {
        try {
            await new Bookmark(+req.params.userId, +req.params.announceId).deleteBookmark();
            res.json(`Bookmark : Announce_id : ${req.params.announceId} for User_id : ${req.params.userId}`)
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    }

}


module.exports = bookmarkController;