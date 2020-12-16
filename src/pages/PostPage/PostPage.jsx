import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Comment from "../../components/Comment/Comment"

import { getPostFromId } from "../../services/posts-api";
import * as commentAPI from "../../services/comments-api";
import "./PostPage.css";

const PostPage = ({ posts, user }) => {
    const { id } = useParams()
    const [currentPost, setCurrentPost] = useState(
        posts.filter((post) => post._id === id)
    )
    const [comment, setComment] = useState({
        message: "",
        postedBy: user._id,
    })

    useEffect(() => {
        getPost(id)
    }, [id])

    const getPost = async (postId) => {
        const newPost = await getPostFromId(postId)
        console.log(newPost, "post")
        setCurrentPost(newPost)
    }

  const handleCommentChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

    const handleCommentSubmit = async (e) => {
        e.preventDefault()
        if (comment.message) {
            try {
                const newComment = await commentAPI.create(comment, id)
                setComment({ ...comment, message: "" })
                setCurrentPost({
                    ...currentPost,
                    comments: [...currentPost.comments, newComment],
                })
            } catch (err) {
                console.log(err)
            }
        }
    };
  

    const handleDeleteComment = async (commentId) => {
        try {
            const deletedComment = await commentAPI.deleteComment(commentId)
            setCurrentPost({
                ...currentPost,
                comments: currentPost.comments.filter(
                    (comment) => comment._id !== deletedComment._id
                ),
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {currentPost ? (
                <div className="postPage">
                    <div className="profile-section">
            <div className="profile-card">
              <i className="fad fa-user-circle fa-10x"></i>
              <p>Name</p>
              <p>Cohort</p>
            </div>
          </div>
                    
                    <section className="post-page-form">
                        <div className="thread-container">
                            {/* <h1>GA MOTIVATE</h1> */}
                            <h1>{currentPost.message}</h1>
                            {currentPost.comments ? (
                            <div className="comments">
                                {currentPost.comments.map((comment) => (
                                    <Comment
                                        key={comment._id}
                                        id={comment._id}
                                        user={user}
                                        handleDeleteComment={
                                            handleDeleteComment
                                        }
                                        
                                    />
                                ))}
                            </div>
                        ) : (
                            "No Comments" 
                        )}
                            {user ? (
                <form onSubmit={handleCommentSubmit}>
                  <div className="main-post-page">
                    <textarea
                      className="post-page-input"
                      placeholder="Post a question or something that motivates you"
                      name="message"
                      onChange={handleCommentChange}
                      value={comment.message}
                    ></textarea>
                  </div>
                  <button className="post-page-btn">Post</button>
                </form>
              ) : (
                ""
              )}
                        </div>
                        
                    </section>
                </div>
            ) : (
                ""
            )}
        </>
    )
}
export default PostPage
