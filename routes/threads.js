
const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/posts");

router.get("", postCtrl.getPosts);
router.get("/:id", postCtrl.getPostDetails);

// router.use(require('../config/auth'))

router.post('/post/:id', threadCtrl.create)
router.post('/:id', threadCtrl.addReply)
router.put('/:id', threadCtrl.update)
router.delete('/:id', threadCtrl.deleteOne)

module.exports = router