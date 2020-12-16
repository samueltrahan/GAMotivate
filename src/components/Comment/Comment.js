import React, { useEffect, useState } from 'react'
import { getComment } from '../../services/comments-api'
import ProfileImage from "../../Assets/Profile Image.png";

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
            <section>
            <div>
            <img src={ProfileImage} alt="avatar" className="avatar" />
            </div>
            <div>
                 <p className="user-details">{comment.postedBy.name}</p>
                <p className="user-details">
                  {comment.postedBy.cohort ? comment.postedBy.cohort : "no coh"}
                </p> 
              </div>
                <p>{comment.message}</p>
                {comment.postedBy._id === user._id ?
                    <button onClick={() => handleDeleteComment(comment._id)}>X</button>
                    :''}
            </section>
            </>
            :''}
        </div>
    )
}

export default Comment;