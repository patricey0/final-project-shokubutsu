const userController = require('./userController');
const eventController = require(`./adminController`);
const announceController = require(`./announceController`);

module.exports = {
    userController,
    eventController,
    announceController
};