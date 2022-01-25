const {Router} = require(`express`);
const {userController, announceController, adminController} = require(`./controllers`);

const { jwt } = require(`./middlewares`);

const router = Router();



router.route(`/users`)
    /**
     * Respond with a json that contains all users
     * @route GET /users
     * @returns {Users} 200 - A JSON with all users
     */
    .get(userController.getAllUsers)
    /**
     * Respond with a json that contains one user after his creation in database
     * @route POST /users
     * @param {String} nickname.json.required the user's nickname
     * @param {String} mail.json.required the user's mail
     * @param {String} password.json.required the user's password
     * @param {String} city.json.required the user's city location
     * @param {String} picture.json the user's picture
     * @returns {User} 200 - A JSON with new user informations
     * @returns {string} 400 - Missing arguments
     * @returns {string} 404 - Page not found
     * @returns {string} 500 - Server or database error
     */
    .post(userController.createUser)

router.route(`/users/:id`)
    /**
     * Respond with a json that contains all informations about one user
     * @route GET /users/:id
     * @param {Int} userId..required the user id 
     * @returns {User} 200 - A JSON with user informations
     */
    .get(userController.getOneUser)
    /**
     * Respond with a json that contains the user's  informations after update
     * @route POST /users
     * @param {String} nickname.json.required the user's nickname
     * @param {String} mail.json.required the user's mail
     * @param {String} password.json.required the user's password
     * @param {String} city.json.required the user's city location
     * @param {String} picture.json the user's picture
     * @returns {User} 200 - A JSON with new user informations
     */
    .post(userController.updateUser)
    .delete(userController.deleteUser);

router.route(`/login`)
    .post(userController.login);

router.route(`/login/reconnect`)
    .get(jwt, userController.reconnect);

router.route(`/announces`)
    .get(announceController.getAllAnnounces)
    .post(announceController.createAnnounce);

router.route(`/announces/:id`)
    .get(announceController.getOneAnnounce)
    .post(announceController.updateAnnounce)
    .delete(announceController.deleteAnnounce);


module.exports = router;