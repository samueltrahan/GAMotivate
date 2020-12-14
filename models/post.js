const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    message: {
        type:String
    }, 
    postedBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    cohort:{type: String},
    questionThreads: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Thread'
    }]
    
}, {
    timestamps:true
})

module.exports = mongoose.model('Post', postSchema)