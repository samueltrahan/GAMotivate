import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <>
      {post ? (
        <div className="post">
          <div>
            <img src="" alt="avatar" />
            <p>Adam</p>
            <p>SEI</p>
          </div>
          <div className="message">
            <p>
              I feel <strong>great</strong> because I got a job today!
            </p>
          </div>
          <Link to={`/post/${post._id}`}>Reply</Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Post;
