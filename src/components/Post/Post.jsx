import React from "react"
import { Link } from "react-router-dom"
import "./Post.css"

const Post = ({ post }) => {
    return (
        <>
            {post ? (
                <section className="post">
                    <div>
                        <img src="" alt="avatar" />
                        <p>{post.postedBy.name}</p>
                        <p>
                            {post.postedBy.cohort
                                ? post.postedBy.cohort
                                : "no cohort"}
                        </p>
                    </div>
                    <div className="message">
                        <p>{post.message}</p>
                    </div>
                    <Link to={`/post/${post._id}`}>Reply</Link>
                </section>
            ) : (
                ""
            )}
        </>
    )
}

export default Post
