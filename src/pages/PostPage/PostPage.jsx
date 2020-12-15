import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./PostPage.css"
const PostPage = ({ posts }) => {
    const [currentPost, setCurrentPost] = useState([])
    const { id } = useParams()
    useEffect(() => {
        setCurrentPost(filterPosts())
    }, [])
    const filterPosts = () => {
        const newPost = posts.filter((post) => post._id === id)
        return newPost[0]
    }
    console.log(currentPost)
    return (
        <>
            {currentPost ? (
                <section className="thread">
                    <div className="user-info">User Info</div>
                    <div className="thread-container">
                        {/* <h1>GA MOTIVATE</h1> */}
                        <h1>{currentPost.message}</h1>
                        <textarea placeholder="Post a question or something that motivates you"></textarea>
                        <div className="post-button">
                            <button>Post</button>
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
        </>
    )
}
export default PostPage
