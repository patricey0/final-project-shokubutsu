const userController = require('./userController');
const eventController = require(`./adminController`);
const announceController = require(`./announceController`);
const imageController = require(`./imageController`);
const bookmarkController = require(`./bookmarkController`);

module.exports = {
    userController,
    eventController,
    announceController,
    imageController,
    bookmarkController
};