import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <>
      {post ? (
        <section className="post">
          <div>
            <img src="" alt="avatar" />
            <p>{post.name}</p>
            <p>{post.cohort ? post.cohort : "no cohort"}</p>
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
  );
};

export default Post;
