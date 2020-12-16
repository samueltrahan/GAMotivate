const Comment = require('../models/comment')
const Post = require('../models/post')

module.exports = {
    create,
    deleteOne,
}

function create(req, res) {
    Comment.create(req.body)
    .then(comment => {
        Post.findById(req.params.postId)
        .then((post) => {
            post.comments.push(comment._id)
            post.save()
        })
        return res.json(comment)
    })
    .catch(err => res.json(err))
}

function deleteOne(req, res) {
    Comment.findByIdAndDelete(req.params.id)
    .then(comment => res.json(comment))
    .catch(err => res.json(err))
}