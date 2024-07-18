const express = require('express');
const { requestBook, listRequests } = require('../controllers/borrowController');

const router = express.Router();

router.get('/', listRequests);
router.post('/request', requestBook);

module.exports = router;
