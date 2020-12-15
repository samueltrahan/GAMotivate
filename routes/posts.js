const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/posts')

router.get('', postCtrl.getPosts)
router.get('/:id', postCtrl.getPostDetails)

// router.use(require('../config/auth'))

router.post('', postCtrl.create)
router.post('/:id', postCtrl.addQuestion)
router.put('/:id', postCtrl.update)
router.delete('/:id', postCtrl.deleteOne)

module.exports = router