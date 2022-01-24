const {Router} = require(`express`);
const {userController, announceController, adminController} = require(`./controllers`);

const { } = require(`./middlewares`);

const router = Router();

console.log();

router.route(`/users`)
    .get(userController.getAllUsers)
    .post(userController.createUser)

router.route(`/users/:id`)
    .get(userController.getOneUser)
    .post(userController.updateUser)
    .delete(userController.deleteUser)

router.route(`/login`)
    .post(userController.login)


module.exports = router;