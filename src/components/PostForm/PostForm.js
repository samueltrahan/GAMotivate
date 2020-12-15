import React from 'react';
import './PostForm.css';

export default function PostForm() {
    return (

            <form className="post-form">
                <div className="main-post">
                    <input className="post-input" type="text" placeholder="What's up?"></input>
                    <button className="post-btn" type="submit">Post</button>
                </div>
            </form>
    )
}
