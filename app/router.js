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
     * @returns {User} 200 - A JSON with user informations
     */
    .post(userController.createUser)

router.route(`/users/:id`)
    .get(userController.getOneUser)
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