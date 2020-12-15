const express = require('express');
const router = express.Router();

const threadCtrl = require('../controllers/threads')

router.get('/:id', threadCtrl.getThreadDetails)

// router.use(require('../config/auth'))

router.post('', threadCtrl.create)
router.post('/:id', threadCtrl.addReply)
router.put('/:id', threadCtrl.update)
router.delete('/:id', threadCtrl.deleteOne)

module.exports = router