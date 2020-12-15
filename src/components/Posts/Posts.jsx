import React, { useEffect, useState } from "react"
import * as postsAPI from "../../services/posts-api"
import Post from "../Post/Post"

import "./PostForm.css"

const Posts = ({ user }) => {
    const [posts, setPosts] = useState([])
    const [message, setMessage] = useState({
        message: "",
        postedBy: "",
        cohort: "",
    })

    useEffect(() => {
        setMessage({
            ...message,
            postedBy: user._id,
            cohort: user.cohort,
        })
        getPosts()
    }, [])

    const getPosts = async () => {
        const postData = await postsAPI.getAll()
        setPosts(postData.reverse())
    }

    const handleChange = (e) => {
        setMessage({
            [e.target.name]: e.target.value,
            postedBy: user._id,
            cohort: user.cohort,
        })
    }

    const handleMessageSubmit = async (e) => {
        e.preventDefault()
        try {
            const post = await postsAPI.create(message)
            setPosts([post, ...posts])
        } catch (err) {
            console.log(err)
        }
    }

    const showPosts = posts.map((post) => {
        return (
            <Post key={post._id} message={post.message} cohort={post.cohort} />
        )
    })

    return (
        <>
            {user ? (
                <form onSubmit={handleMessageSubmit} className="post-form">
                    <div className="main-post">
                        <input
                            onChange={handleChange}
                            className="post-input"
                            type="text"
                            placeholder="What's up?"
                            name="message"
                            value={message.message}
                        ></input>
                        <button className="post-btn" type="submit">
                            Post
                        </button>
                    </div>
                </form>
            ) : (
                ""
            )}
            <h1>Post Feed</h1>
            {showPosts}
        </>
    )
}

export default Posts
