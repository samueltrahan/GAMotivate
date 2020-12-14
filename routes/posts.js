const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/posts')

router.get('/:id', postCtrl.getPostDetails)
router.post('', postCtrl.create)
router.post('/:id', postCtrl.addQuestion)

module.exports = router