const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/posts')

router.get('/:id', postCtrl.getPostDetails)
router.post('', postCtrl.create)

module.exports = router