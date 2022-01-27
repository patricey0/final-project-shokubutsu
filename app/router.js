const {Router} = require(`express`);
const {userController, announceController, adminController} = require(`./controllers`);

const { jwt } = require(`./middlewares`);

const router = Router();




/**
 * Respond with a json that contains all users
 * @route GET /users
 * @returns {Users} 200 - A JSON with all users
 */
router.get(`/users`, userController.getAllUsers)
/**
 * Respond with a json that contains one user after his creation in database
 * @route POST /users
 * @param {String} nickname.path.required the user's nickname
 * @param {String} mail.path.required the user's mail
 * @param {String} password.path.required the user's password
 * @param {String} city.path.required the user's city location
 * @param {String} picture.path the user's picture
 * @returns {User} 200 - A JSON with new user informations
 * @returns {string} 400 - Missing arguments
 * @returns {string} 404 - Page not found
 * @returns {string} 500 - Server or database error
 */
router.post(`/users`, userController.createUser)


/**
 * Respond with a json that contains all informations about one user
 * @route GET /users/:id
 * @param {number} userId.path.required the user id 
 * @returns {User} 200 - A JSON with user informations
 */
router.get(`/users/:id`, userController.getOneUser)

/**
 * Respond with a json that contains all announces about one user
 * @route GET /users/:id/announces
 * @returns {Announce} 200 - A JSON with all announces for one user
 * @returns {string} 404 - Page not found
 * @returns {string} 500 - Server or database error
 */
router.get(`/users/:id/announces`, announceController.getAllAnnouncesByUser)
/**
 * Respond with a json that contains the user's  informations after update
 * @route PATCH /users/:id
 * @param {String} nickname.path.required the user's nickname
 * @param {String} mail.path.required the user's mail
 * @param {String} password.path.required the user's password
 * @param {String} city.path.required the user's city location
 * @param {String} picture.path the user's picture
 * @returns {User} 200 - A JSON with new user informations
 * @returns {string} 400 - Missing arguments
 * @returns {string} 404 - Page not found
 * @returns {string} 500 - Server or database error
 */
router.patch(`/users/:id`, userController.updateUser)
/**
 * Respond with a true is the deletion is ok.
 * @route DELETE /users/:id
 * @param {number} userId.path.required the user id 
 * @returns {Boolean} 200 - True if ok
 */
router.delete(`/users/:id`, userController.deleteUser);


router.route(`/login`)
    /**
     * Respond with a json that contains the user's  informations after logged in
     * @route POST /login
     * @param {String} mail.path.required the user's mail
     * @param {String} password.path.required the user's password
     * @returns {User} 200 - A JSON with new user informations
     * @returns {string} 400 - Incorrect mail or password
     * @returns {string} 404 - Page not found
     * @returns {string} 500 - Server or database error
     */
    .post(userController.login);

router.route(`/login/reconnect`)
    /**
     * Respond with a json that contains the user's  informations after logged in
     * @route POST /login
     * @param {String} tokenJWT.path.required the user's jwt token
     * @returns {User} 200 - A JSON with new user informations
     * @returns {string} 400 - Invalid token
     * @returns {string} 404 - Page not found
     * @returns {string} 500 - Server or database error
     */
    .get(jwt, userController.reconnect);

router.route(`/announces`)
    /**
     * Respond with a json that contains all announces
     * @route GET /announces
     * @returns {Announce} 200 - A JSON with all announces
     * @returns {string} 404 - Page not found
     * @returns {string} 500 - Server or database error
     */
    .get(announceController.getAllAnnounces)
    /**
     * Respond with a json that contains one announce after his creation in database
     * @route POST /announces
     * @param {String} title.path.required The announce's title
     * @param {String} image.path.required The announce's image link
     * @param {Timestamp} creation_date.path.required The announce's creation date
     * @param {String} description.path.required The announce's description
     * @param {String} category.path.required The announce's category
     * @returns {Announce} 200 - A JSON with new announces informations
     * @returns {string} 400 - Missing arguments
     * @returns {string} 404 - Page not found
     * @returns {string} 500 - Server or database error
     */
    .post(announceController.createAnnounce);

router.route(`/announces/:id`)
    /**
     * Respond with a json that contains all informations about one user
     * @route GET /announces/:id
     * @param {number} announceId.path.required the announce id 
     * @returns {User} 200 - A JSON with the announce informations
     */
    .get(announceController.getOneAnnounce)
    /**
     * Respond with a json that contains one announce after his update in database
     * @route PATCH /announces/:id
     * @param {number} announceId.path.required the announce id 
     * @param {String} title.path.required The announce's title
     * @param {String} image.path.required The announce's image link
     * @param {Timestamp} creation_date.path.required The announce's creation date
     * @param {String} description.path.required The announce's description
     * @param {String} category.path.required The announce's category
     * @returns {Announce} 200 - A JSON with new announces informations
     * @returns {string} 400 - Missing arguments
     * @returns {string} 404 - Page not found
     * @returns {string} 500 - Server or database error
     */
    .patch(announceController.updateAnnounce)
    /**
     * Respond with a true is the deletion is ok.
     * @route DELETE /announces/:id
     * @param {number} announceId.path.required the user id 
     * @returns {Boolean} 200 - True if ok.
     */
    .delete(announceController.deleteAnnounce);


module.exports = router;