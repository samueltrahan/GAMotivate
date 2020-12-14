const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    message: {
        type:String
    },
    postedBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
}, {
    timestamps: true
})

const threadSchema = new mongoose.Schema({
    question: {
        type:String
    },
    replies: [replySchema]
},{
    timestamps:true
})

module.exports = mongoose.model('Thread', threadSchema)