import React, {useState, useEffect} from 'react';
import './PostForm.css';
import * as postsAPI from '../../services/posts-api'

export default function PostForm() {
    const [message, setMessage] = useState({message: '',  postedBy: '', cohort: ''})

    const handleChange = (e) => {
        setMessage({
            [e.target.name]: e.target.value,
        })
    }


    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        try {
           await postsAPI.create(message)

        } catch(err) {
            console.log(err);
        }
    }


    return (

            <form onSubmit={handleMessageSubmit} className="post-form">
                <div className="main-post">
                    <input onChange={handleChange} className="post-input" type="text" placeholder="What's up?" name="message" value={message.message}></input>
                    <button className="post-btn" type="submit">Post</button>
                </div>
            </form>
    )
}
