const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comments')

router.get('/:id', commentCtrl.getComment)

router.use(require('../config/auth'))

router.post('/:postId', commentCtrl.create)
router.delete('/:id', commentCtrl.deleteOne)

module.exports = router