const express = require('express');
const router = express.Router();

const threadCtrl = require('../controllers/threads')

router.get('/:id', threadCtrl.getThreadDetails)
router.post('', threadCtrl.create)
router.post('/:id', threadCtrl.addReply)

module.exports = router