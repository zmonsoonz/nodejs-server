const express = require('express');
const getContacts = require('../controllers/contacts-controller');
//создаем роутер, чтобы импортировать его в другой файл
const router = express.Router();

router.get('/contacts', getContacts);

module.exports = router;
