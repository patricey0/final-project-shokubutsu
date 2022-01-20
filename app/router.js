const {Router} = require(`express`);
const { user } = require("pg/lib/defaults");
const {userController} = require(`./controllers`);

const {

} = require(`./middlewares`);

const router = Router();

router.get(`/users`, userController.AllUsers);
router.get(`/user/:id`, userController.OneUser);


module.exports = router;