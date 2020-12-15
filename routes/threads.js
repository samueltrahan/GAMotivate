
const express = require("express");
const router = express.Router();

const threadCtrl = require("../controllers/threads");


// router.use(require('../config/auth'))

router.post('/post/:id', threadCtrl.create)
router.post('/:id', threadCtrl.addReply)
router.put('/:id', threadCtrl.update)
router.delete('/:id', threadCtrl.deleteOne)

module.exports = router