import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../../Assets/Profile Image.png";
import CommentButton from "../../Assets/Comment Button.png";
import SaveButton from "../../Assets/Save button.png";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <>
      {post ? (
        <section className="post">
          <div className="posted-user-details">
            <div>
              <img src={ProfileImage} alt="avatar" className="avatar" />
              <div>
                <p className="user-details">{post.postedBy.name}</p>
                <p className="user-details">
                  {post.postedBy.cohort ? post.postedBy.cohort : "no coh"}
                </p>
              </div>
            </div>
            <div className="post-delete-btn">x</div>
          </div>
          <div className="message">
            <p>{post.message}</p>
          </div>
          <div className="post-bottom-section">
            <div className="post-line"></div>
            <img src={SaveButton} alt="Save Button" className="save-post-btn" />
            <Link to={`/post/${post._id}`}>
              <img
                src={CommentButton}
                alt="comment button"
                className="comment-btn"
              />
            </Link>
          </div>
          <div className="reply-amount">
            <img src={ProfileImage} alt="avatar" className="avatar-bottom" />
            <p>12 replies</p>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Post;
