const {Router} = require(`express`);
const {userController, announceController, adminController} = require(`./controllers`);

const { } = require(`./middlewares`);

const router = Router();


router.route(`/users`)
    .get(userController.getAllUsers)
    .post(userController.createUser)

router.route(`/users/:id`)
    .get(userController.getOneUser)

router.route(`/login`)
    .post(userController.login)


module.exports = router;