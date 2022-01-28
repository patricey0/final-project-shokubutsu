const userController = require('./userController');
const eventController = require(`./adminController`);
const announceController = require(`./announceController`);
const imageController = require(`./imageController`);

module.exports = {
    userController,
    eventController,
    announceController,
    imageController
};