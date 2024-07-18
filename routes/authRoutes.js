const express = require('express');
const { signUp, logIn, logOut } = require('../controllers/authController');

const router = express.Router();

router.get('/signup', (req, res) => res.render('auth/signup'));
router.post('/signup', signUp);
router.get('/login', (req, res) => res.render('auth/login'));
router.post('/login', logIn);
router.post('/logout', logOut);

module.exports = router;
