const router = require('express').Router();
const controller = require('../controllers/user.controller');
const validate = require('../middlewares/validations');
const tokenValidation = require('../middlewares/tokenValidation');

router.post('/register', validate.register, controller.register);
router.post('/login', validate.login, controller.login);
router.get('/profile', tokenValidation, controller.getUserProfile);
router.put('/profile', tokenValidation, validate.update, controller.updateUserProfile);
router.delete('/profile', tokenValidation, controller.deleteUserProfile);
router.post('/changepassword', tokenValidation, validate.changePassword, controller.changePassword);
router.post('/resetpassword/:resetToken', controller.resetPassword);

module.exports = router;