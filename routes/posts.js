const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/posts");

router.get("", postCtrl.getPosts);
router.get("/:id", postCtrl.getPostDetails);

// router.use(require('../config/auth'))

<<<<<<< HEAD
router.post("", postCtrl.create);
router.post("/:id", postCtrl.addQuestion);
router.put("/:id", postCtrl.update);
router.delete("/:id", postCtrl.deleteOne);
=======
router.post('', postCtrl.create)
router.put('/:id', postCtrl.update)
router.delete('/:id', postCtrl.deleteOne)
>>>>>>> 711dbea97b07a718802f520aa8b487534e22212e

module.exports = router;
