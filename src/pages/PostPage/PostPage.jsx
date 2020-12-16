import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Comments from "../../components/Comments/Comments";

import { getPostFromId } from "../../services/posts-api";
import * as commentAPI from "../../services/comments-api";
import "./PostPage.css";

const PostPage = ({ posts, user }) => {
  const [currentPost, setCurrentPost] = useState([]);
  const { id } = useParams();
  const [comment, setComment] = useState({
    message: "",
    postedBy: user._id,
  });

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const newPost = await getPostFromId(id);
    setCurrentPost(newPost);
  };

  const handleCommentChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (comment.message) {
      try {
        await commentAPI.create(comment, id);
        getPost();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      {currentPost ? (
        <section className="thread">
          <div className="user-info">User Info</div>
          <div className="thread-container">
            {/* <h1>GA MOTIVATE</h1> */}
            <h1>{currentPost.message}</h1>
            <form onSubmit={handleCommentSubmit}>
              <textarea
                placeholder="Post a question or something that motivates you"
                name="message"
                onChange={handleCommentChange}
                value={comment.message}
              ></textarea>
              <button>Post</button>
            </form>
          </div>
          <Comments comments={currentPost.comments} />
        </section>
      ) : (
        ""
      )}
    </>
  );
};
export default PostPage;
