import React, { useEffect, useState } from 'react'
import { getComment } from '../../services/comments-api'

import './Comment.css'

const Comment = ({id, handleDeleteComment, user}) => {

    const [comment, setComment] = useState()

    useEffect(() => {
        getCommentInfo(id)
    }, [id])

    const getCommentInfo = async (commentId) => {
        const comment = await getComment(commentId)
        setComment(comment)
    }

    return (
        <div className='comment'>
            {comment ? 
            <>
                <h4>{comment.postedBy.name}</h4>
                <p>{comment.message}</p>
                {comment.postedBy._id === user._id ?
                    <button onClick={() => handleDeleteComment(comment._id)}>X</button>
                :''}
            </>
            :''}
        </div>
    )
}

export default Comment